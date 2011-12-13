// Flow;
// 1. create a server
// 2. analyse the request: get the uri
// 3. locate the file, load the content of it in buffer
// 4. write the contents to the response body

var http = require( 'http' );
var fs = require( 'fs' );

http.createServer(function( request, response ){

    var uri = __dirname + request.url;
    
    fs.open( uri, 'r', function( error, fd){
        if ( error ) {
            // If error, say we can't locate the file
            response.writeHead( 404, { 'Content-Type': 'text/plain'} );
            response.end( 'Sorry, we could not locate the file you are looking for.' );
            console.log( error );
            return;
        }
        // Create buffer to read the contents of the file into
        fs.stat( uri, function( error, stats ){
            if (error) {
                throw error;
            }
            console.log( 'File is ' + stats.size + 'bytes in size.' );
            var buffer = new Buffer( stats.size );
            var readBytes = 0;               
            fs.read( fd, buffer, 0, buffer.length, 0, function( error, bytesRead, buffer ){
                response.writeHead( 200, {'Content-Type' : 'text/plain'});
                response.write( buffer, 'utf8' );
                response.end();
                console.log( 'Succesfully served file' );
            });
        });
    });
}).listen( 4000 );