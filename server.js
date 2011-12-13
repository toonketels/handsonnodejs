// We need http module to create a server.

// To create a server we do 3 things:
//  - create server
//  - define how to respond to requests
//  - listen on a port

var http = require('http');

// Create the server
var server = http.createServer();
// Define what to do when a request happens.
// We start listening on the request event.
server.on('request', function(request, response) {
    // Set the http header
    response.writeHead(200, {'Content-Type': 'text/plain'});
    // Set the contents.
    response.write('Hello world!');
    response.end();
});
// Start listening on port 4000,
// we can use the server on http://localhost:4000
// (first start the server via 'node server.js, of course)
server.listen(4000);