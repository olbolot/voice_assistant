const path = require('path');
const { fetchIamToken } = require('../auth/iam-token');
const Grpc = require('./grpc');

let grpc = null;

async function textToSpeech(text) {
    const iamToken = await fetchIamToken();

    grpc = new Grpc({
        iamToken,
        pathToRootSert: path.join(__dirname, '../keys/roots.pem'),
        pathToProto: path.join(__dirname, './stt_service.proto'),
        text
    });

    return grpc.createGRPCStream();
}

module.exports = textToSpeech;
