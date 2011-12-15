// Goal: save the request body in file

// Flow:
//  1. Create server
//  2. On request: create file to stream the data too
//  3. Pipe the request data to the file stream

// ISSUE:
// Making a second post request takes a realy long time
// before data is written to file. Something might be blocking
// or this is a sideeffect of working with Poster.

// First wrote everything to same file. Thought that this
// would create this strange behavior. But writing to different
// files results in the same latency. Even calling destroySoon
// wont have any effect. @todo: investigate

// ISSUE:
// I was not able to write to the file using fs.open en fs.write.
// This because the file system has some functioncallbacks and the
// server has some function callbacks which I was unable to combine.
// Looked at the solution and find out about streams, but doing it
// manally should also be possible. @todo: investigate


var fs = require( 'fs' );
var sequence = 0;

require( 'http' ).createServer( function(request, response ){
    // Create a file
    var path = __dirname + '/files/test-http-2-file-' + sequence + '.txt';
    //var path = __dirname + '/files/test3.txt';
    console.log( 'Creating file to write to on: ' + path );
    // createWriteStream is a method of fs
    var options = {
        flags: 'a',
        encoding: 'utf8'
    }
    var writeStream = fs.createWriteStream( path, options );
    
    // Our request is also a stream, so we can call
    // its stream methods
    // Set the destination stream on the source stream using pipe
    // This is all we need, the data gets pushed and closed automatically
    request.pipe(writeStream);
    
    // We are just login to log stuff on data
    // and end events.
    // Actual 'piping' of data is done through the pipe.
    request.on( 'data', function( data ){
        console.log( 'RECEIVED DATA: ' + data );
    });
    request.on( 'end', function(){
        console.log( 'FINISHED WITH THIS REQUEST' );
        response.writeHead( 200, {'Content-Type': 'text/plain' } );
        response.end( 'Thank you!' );
    });   

sequence ++;
}).listen( 4000 );

