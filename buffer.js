// Copies parts of a buffer into another buffer.

var buffer = new Buffer(100);

// Fills the buffer
for( var i = 0; i < buffer.lenght; i++ ) {
    buffer[i] = i;
}

// Prints it
console.log( buffer );

var sliced_buffer = new Buffer(20);

// Buffer copy: sourceBuffer.copy(targetBuffer, targetStart, sourceStart, sourceEnd);
buffer.copy(sliced_buffer, 0, 40, 60 );

console.log( sliced_buffer );