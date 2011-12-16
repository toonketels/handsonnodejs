// Create chat server

// Flow:
//  1. Create server
//  2. When ever data is send to it, write it to all connections

// Keep track of all sockets (== all different connections)
// We need this to broadcast all data we received to all connections.
var sockets = [];

// Create a server
require( 'net' ).createServer( function( socket ){
    
    // Self executing anonymous function
    // Executes whenever a connection is made
    (function() {
        console.log( 'Somebody joined the chat' );
        // Adds the connection to the sockets array
        sockets.push[socket];
        // Boadcast a message to everybody
        sockets.forEach( function( socket){
            // Sends data an the socket
            socket.write( 'Somebody joined the chat' );
        });
    })();
    
    // When we receive data from somebody
    // Log and broadcast it.
    socket.on( 'data', function( data ){
        console.log( 'Received data: ' + data );
        sockets.forEach(function( socket ){
            socket.write( data );
        });
    });
    
    // When somebody disconnects
    socket.on( 'end', function( data ){
        // Log it and say goodbye to person
        console.log( 'somebody is leaving' );
        socket.write( 'Bye, thank you for passing by!' );
        // Remove socket from sockets array
        var pos = sockets.indexOf(socket);
        if( pos > 0 ) {
            sockets.splice( pos, 1 );
        }
        // Send message to everybody
        sockets.forEach( function( socket ){
            socket.write( 'Somebody is leaving' );
        });
    });

}).listen( 4001 );


// Cool js

// var arrayName = [];
//  Creates new array

// arrayName.forEach( callback, [args] );
//  Async foreach loop

// var pos = arrayName.indexOf( item );
// arrayName.splice( pos, 1 );
//  Remove a given item from array