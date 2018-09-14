/**
 * Find temperature of a city using openweather api.
 */

const http = require('http');
const url = require('url');
const weatherApi = require('./weatherapi');

http.createServer((req, res) => {
    const queries = url.parse(req.url, true).query;
    weatherApi(queries.city)
    .then(weather => {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end(`At ${queries.city}, The Temperature is ${Math.round(weather.temp-273)} degree C.`);
    })
    .catch(err => {
        res.writeHead(500, {'Content-Type': 'text/plain'});
        res.end(`Internal Server Error`);
    });
}).listen(8000);