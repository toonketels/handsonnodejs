// We need the file system module for low level file operations.
var fs = require( 'fs' );

// Stat method to get some info about the file
fs.stat( 'a.txt', function( error, stats ) {
    // Log the error if we have one
    if ( error ) {
        console.log( error.message );
        return;
    }
    // Call the size property of stats object
    console.log( stats.size );
});

// Open file
fs.open( 'a.txt', 'r', function( error, fd ) {
    // Once opened, check error first
    if ( error ) {
        console.log( error.message );
        return;
    }
    // Create buffer and read file next
    var buffer = new Buffer( 5 );
    // We read just part of file and drop content in buffer
    fs.read( fd, buffer, 0, 5, 10, function( error, bytesRead, buffer ) {
        // Once read, handle error first
        if ( error ) {
            console.log( error.message );
            return;
        }
        // Log the items saved in buffer
        console.log( buffer.toString() );
    });
});