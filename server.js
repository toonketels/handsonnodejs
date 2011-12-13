// Consize example of server

// Directly call createServer on http module,
// pass it the response function as an argument.
require('http').createServer(function(request, response){
    response.writeHead(200, {'Content-Type': 'text/plain'});
    // Write http body in end method
    response.end('Hello world!');
// and listen directly on port 4000.
}).listen(4000);
