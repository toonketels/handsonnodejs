// Add util module for its inspect method,
// usefull for debugging.
var util = require( 'util' );

require('http').createServer(function(request, response){
    response.writeHead(200, {'Content-Type': 'text/plain'});
    // Inspect the request headers object.
    response.end( util.inspect(request.headers) );
}).listen(4000);
