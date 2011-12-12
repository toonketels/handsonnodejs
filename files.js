// We are going to append a string.

var fs = require( 'fs' );

// flow:
// open it
// write to it (no need to read it)

// Open a file to be appended to (a flag)
fs.open( 'b.txt', 'a', function( error, fileDescription ){
    if ( error ) {
        throw( error );
    }
    // Create a buffer
    // Passing utf8 as encoding is not necesary as it's the defaults for strings.
    var buffer = new Buffer('abc', 'utf8');
    // Write to the file.
    // Passing null as position of file will append the string
    // on the current possition (and we opened file with a flag so its at the end)
    fs.write( fileDescription, buffer, 0, buffer.length, null, function( error, written, buffer ) {
        if ( error ) {
            throw( error );
        }
        console.log( 'Written to file: ' + buffer.toString() )
    });
});