'use strict';

const http = require('http');
const PORT = process.env.PORT || 3000;

const server = http.createServer();
server.on('request', onRequest);
server.on('listening', onListening);

server.listen(PORT);


function onListening() {
    return console.log(`Listening on port ${PORT}`);
}

function onRequest(req, res) {
    return res.end('\n\nHello from Node Http Server\n\n');
}
