const jose = require('node-jose');
const fs = require('fs');
const { KEY_ID, ISS } = require('./consts');

const privateKey = fs.readFileSync(require.resolve('../keys/private.pem'));

async function createJWT() {
    const now = Math.floor((new Date().getTime()) / 1000);

    const payload = {
        iss: ISS,
        aud: 'https://iam.api.cloud.yandex.net/iam/v1/tokens',
        iat: now,
        exp: now + 3600
    };
    const sign = await jose.JWK.asKey(privateKey, 'pem', { typ: "JWT", alg: 'PS256', kid: KEY_ID, });
    let result;

    await jose.JWS.createSign({ format: 'compact' }, sign)
        .update(JSON.stringify(payload))
        .final()
        .then(function(res) {
            result = res;
        });

    return result;
}

module.exports = createJWT;
