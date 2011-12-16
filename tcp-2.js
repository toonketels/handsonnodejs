// Create chat client

// Flow:
//  1. Establish connection
//  2. Send data from stdin
//  3. Write out all we get back

var net = require( 'net' );

// Check if we have received the right inputs
if ( process.argv.length < 4 ) {
    console.log( 'Execute this command with the following arguments:\n' );
    console.log( process.argv[0] + ' ' + process.argv[1] + ' <host> <port>');
    return;
}

var client = net.createConnection( process.argv[3], process.argv[2], function(){
    console.log( 'Connected to server' );
    client.write( 'Hello' );
});


client.on( 'data', function( data ){
    console.log( 'RECEIVED: ' + data.toString());
});

process.stdin.resume();
process.stdin.setEncoding( 'utf8' );

process.stdin.on( 'data', function( data ){
    client.write( data.toString() );
});
