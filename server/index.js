const Hapi = require('@hapi/hapi');
const path = require('path');
const inert = require('inert');
const textToSpeech = require('./sst/main');

async function init() {
    const server = Hapi.Server({
        routes: {
            files: {
                relativeTo: path.join(__dirname, '../public')
            }
        },
        port: 3000,
        host: 'localhost'
    });

    await server.register(inert);

    server.route({
        method: 'GET',
        path: '/',
        handler: (_, h) => h.file('index.html')
    });

    server.route({
        method: 'GET',
        path: '/polyfill.js',
        handler: (_, h) => h.file('polyfill.js')
    });

    server.route({
        method: 'POST',
        path: '/api/speech',
        handler: (request) => textToSpeech(request.payload),
        options: {
            payload: {
                allow: 'text/plain',
            }
        }
    });

    await server.start();

    console.log('Server running on %s', server.info.uri);
}

process.on('unhandledRejection', (err) => {
    console.log(err);
});

process.on('uncaughtException', function (err) {
    console.log(err);
});

init();
