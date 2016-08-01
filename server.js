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

function serveIndex(res) {
    res.setHeader('Content-Type', 'text/html');
    let fileName = path.join(__dirname, 'public', 'index.html');
    let rs = fs.createReadStream(fileName);
    rs.pipe(res);
    rs.on('error', (err)=> res.end(err.message));
    rs.on('end', ()=> console.log('No more data'));
    //rs.on('data', (chunk)=> console.log('->', chunk.toString(), '\n')); // use pipe
}

function serveApp(res) {
    res.setHeader('Content-Type', 'text/html');
    let fileName = path.join(__dirname, 'public', 'app.js');
    let rs = fs.createReadStream(fileName);
    rs.pipe(res);
    rs.on('error', (err)=> res.end(err.message));
    rs.on('end', ()=> console.log('No more data'));
    //rs.on('data', (chunk)=> console.log('->', chunk.toString(), '\n')); // use pipe
}

function onRequest(req, res) {

    let url = req.url;

    if (url.startsWith('/app') || url === '/app.js') {
        return serveApp(res);
    }

    if (url.startsWith('/index') || url === '/') {
        return serveIndex(res);
    }

    res.statusCode = 404;
    res.end(`404 not found: ${url}`);

}



