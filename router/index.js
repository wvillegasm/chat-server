"use strict";

const path = require('path');
const st = require('st');

const mount = st({
    path: path.join(__dirname, '..', 'public'),
    url:'/',
    passthrough: true,
    index: 'index.html'
});


function onRequest(req, res) {
    console.log(`onRequest: ${req.url}`);
    mount(req,
        res,
        ()=> {
            res.statusCode = 404;
            res.end(`File Not found: ${req.url}`);
        }
    );
}

module.exports = onRequest;