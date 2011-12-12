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