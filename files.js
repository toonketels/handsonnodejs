// We are going to override the contents of file b.txt with the string below.

var fs = require( 'fs' );

// flow:
// open it
// write to it (no need to read it)

// Open a file to be written to (w flag)
fs.open( 'b.txt', 'w', function( error, fileDescription ){
    // Create a buffer
    // Passing utf8 as encoding is not necesary as it's the defaults for strings.
    var buffer = new Buffer('ABCDEFGHIJLKLMNOPQRSTUVXYZ0123456789abcdefghijklmnopqrstuvxyz', 'utf8');
    // Write to the file.
    fs.write( fileDescription, buffer, 0, buffer.length, 0, function( error, written, buffer ) {
        if ( error ) {
            throw( error );
        }
        console.log( 'Written to file: ' + buffer.toString() )
    });
});