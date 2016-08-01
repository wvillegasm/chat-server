"use strict";

const path = require('path');
const st = require('st');

const mount = st({
    path: path.join(__dirname, '..', 'public'),
    index: 'index.html'
});


function onRequest(req, res) {
    mount(req, res, (err)=> {
        if (err) {
            return res.end('Error FOUND: ', err.message);
        }

        res.statusCode = 404;
        res.end(`Not found: ${req.url}`);
    });
}

module.exports = onRequest;