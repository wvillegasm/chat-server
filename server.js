'use strict';

const http = require('http');
const fs = require('fs');
const path = require('path');
const router = require('./router');
const PORT = process.env.PORT || 3000;


const server = http.createServer();

server.on('request', router);
server.on('listening', onListening);

server.listen(PORT);

function onListening() {
    return console.log(`Listening on port ${PORT}`);
}





