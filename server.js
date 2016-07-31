'use strict';

const http = require('http');
const fs = require('fs');
const path = require('path');
const PORT = process.env.PORT || 3000;


const server = http.createServer();
server.on('request', onRequest);
server.on('listening', onListening);

server.listen(PORT);


function onListening() {
    return console.log(`Listening on port ${PORT}`);
}

function onRequest(req, res) {

    let fileName = path.join(__dirname, 'public', 'index.html');
    fs.readFile(fileName, (err, data) =>{
        if(err) {
            return res.end(err.message);
        }
        res.end(data);
    });
}
