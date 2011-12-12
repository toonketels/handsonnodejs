var fs = require( 'fs' );

// Open file
fs.open( 'a.txt', 'r', function( error, fd ) {
    // Once opened, check error first
    if ( error ) {
        console.log( error.message );
        return;
    }
    // Since we are going to execute the same functionality twice,
    // wrap it in a function. Here we declare this function.
    // The only things differnet is the startingpoint, possibly the lenght
    // and the buffer to print.
    function readSome( startingAt, byteCount, callback ) {
        var buffer = new Buffer( byteCount );
        // Set readBytes to 0, this var is going to keep track how for
        // we have read into buffer
        var readBytes = 0;
        // We create a self executing function because when we check if we
        // were successful and we find out not all bytes have been read, we
        // are going te execute this function again
        (function readIt() {
            // Standard fs.read method
            fs.read( fd, buffer, readBytes, buffer.length - readBytes, startingAt + readBytes, function( error, bytesRead, buffer ) {
                if ( error ) {
                    console.log( error.message );
                    return;
                }
                // Set readBytes to the number of bytes actually read.
                // This is our additional check to be sure we have read it all.
                readBytes += bytesRead;
                // If we have read it all, execute the callback var (function) provided
                // by the caller and pass the buffer along.
                if (bytesRead === buffer.length) {
                    callback(buffer);
                // If we haven't read the entire length, try to read it again from
                // where we ended.
                } else {
                    readIt();
                }
            
            });
        })();
    }
    // Execute the function we just declared.
    // Our callback gets the buffer argument
    readSome( 5, 4, function( buffer1 ){
        // We log the output and execute the function
        // again in our callback
        console.log( buffer1.toString() );
        readSome( 9, 4, function( buffer2 ){
            // Log the second buffer
            console.log( buffer2.toString() );
        });
    });
});