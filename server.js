'use strict';

const http = require('http');
const PORT = process.env.PORT || 3000;

const server = http.createServer(onRequest);
server.listen(PORT, onListening);


function onListening() {
    return console.log(`Listening on port ${PORT}`);
}

function onRequest(req, res) {
    return res.end('\n\nHello from Node Http Server\n\n');
}
