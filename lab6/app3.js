/**
 * Return server's location to the client.
 */

const http = require('http');
const geoip = require('geoip-lite');
const externalip = require('externalip');

http.createServer((req, res) => {
    externalip(function (err, ip) {
        if(err) {
            res.writeHead(500, {'Content-Type': 'text/plain'});
            res.end('Internal Server Error');
        }
        else {
            res.writeHead(200, {'Content-Type': 'text/plain'});
            sres.end(`Server's location is ${geoip.lookup(ip).city}`);
        }
    });
}).listen(8000);