// Creates a buffer, 100 bytes lenght
var buffer = new Buffer(100);

// Fills the buffer
for( var i = 0; i < buffer.lenght; i++ ) {
    buffer[i] = i;
}

// Prints it
console.log( buffer );
