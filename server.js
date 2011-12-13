// Create the options we want to pass in the request
var options = {
    host: 'www.google.com',
    port: 80,
    path: '/upload',
    method: 'POST'
}

// We peform a request with the options,
// and execute the callback witht the response object when
// we get a response.
var request = require( 'http' ).request( options, function( response ){
    // We log the some data about the response we get back
    console.log( 'STATUS: ' + response.statusCode );
    console.log( 'HEADERS: ' + JSON.stringify( response.headers ));
    // Set an encoding so we get a string instead of a buffer
    response.setEncoding( 'utf8' );
    // For every data 'package' we get back, log the contents
    // note: the 'data' event was emitted 5 times.
    // We are streaming data from the server
    response.on( 'data', function( chunck ){
        console.log( 'BODY: ' + chunck );
    });
});

// Here we actually performing the request to google.
request.write( "data\n" );
request.write( "data\n" );
request.end();