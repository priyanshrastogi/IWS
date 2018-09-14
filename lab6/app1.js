/**
 * Parse URL and return a String with name and department. i.e. localhost:8000?name=Priyansh&department=CSE
 */

const http = require('http');
const url = require('url');

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'})
    const queries = url.parse(req.url, true).query;
    res.end(`Hello, ${queries.name} from ${queries.department} department.`);
}).listen(8000);