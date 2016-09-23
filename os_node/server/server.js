var http = require("http");
var url = require("url");

http.createServer(function(request, response) {

    console.log(request.url);

    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Hello World');
}).listen(8888);

console.log("Server running at http://127.0.0.1:8888");
