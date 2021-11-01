const fs = require('fs');
const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');

const evtToPromise = evt => {
    const prom1 = new Promise((resolve) => {
        let data;

        evt.on('data',function(response) {
            data = response.audioChunk.data;
        });

        evt.on('end', function(){
            resolve(data);
        });
    });

    const prom2 = new Promise((_, reject) => setTimeout(() => {
        reject(new Error('error timeout'));
    }, 20000));

    return Promise.race([prom1 ,prom2]);
};

class GrpcService {
    constructor({iamToken, pathToProto, pathToRootSert, text}) {
        this.text = text;
        this.token = iamToken;
        const packageDefinition = protoLoader.loadSync(pathToProto, {
            includeDirs: ['node_modules/google-proto-files', __dirname]
        });
        this.packageObject = grpc.loadPackageDefinition(packageDefinition);
        this.grpcCredentials = grpc.credentials.createSsl(fs.readFileSync(pathToRootSert));
        this.stream = null;
    }

    createGRPCStream = () => {
        console.log('GrpcService class');
        const serviceMetadata = new grpc.Metadata();
        serviceMetadata.add('authorization', `Bearer ${this.token}`);
        const serviceConstructor = this.packageObject.speechkit.tts.v3.Synthesizer;
        const service = new serviceConstructor('tts.api.cloud.yandex.net:443', this.grpcCredentials);
        const req = {text: this.text, hints: [{voice: "kuznetsov_male"}, {speed: 1.1}]};
        const evt = service.UtteranceSynthesis(req, serviceMetadata);


        return evtToPromise(evt);
    };
}

module.exports = GrpcService;
