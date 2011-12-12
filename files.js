// We are going to change a char

var fs = require( 'fs' );

// flow:
// open it
// create buffer
// append buffer at location


// Open a file with 'a' flag 
fs.open( 'b.txt', 'a', function( error, fd ){
    if ( error ) {
        throw error;
    }
    
    // Create buffer
    var buffer = new Buffer( '7' );
    var written = 0;
    
    // Write to the file
    (function changeChar() {
        fs.write( fd, buffer, written, buffer.length - written, 10, function( error, bytesWritten, buffer ){
            if ( error ) {
                throw error;
            }
            written += bytesWritten;
            if (written === buffer.length) {
                console.log( 'We have done it!' );
            } else {
                changeChar();
                console.log( 'Go again' );
            }
        });
    })();
});