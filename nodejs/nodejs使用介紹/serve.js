var http = require('http')

http.createServer((req, res) => {
    res.writeHead(200, {'Context-type':'text/plain'});
    res.end('hello world');
}).listen(8888);

console.log("server startup")