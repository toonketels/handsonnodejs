// Create a tcp server
// Callback gets executed once connection is made (connection event)
var net = require( 'net' ).createServer(function( socket ){
    
    // Whenever we receive data
    socket.on( 'data', function( data ){
        console.log( 'DATA EVENT EMITTED: ' + data );
    });
    
    // Whenever the connection is broken
    socket.on( 'end', function( data ){
        console.log( 'END EVENT EMITTED: ' + data );
    });
    
    // Response, written to requestor
    socket.write( 'something' );
    
    // Here we disconnection after 5 seconds, even if
    // the communcation is still going
    /*
    setTimeout(function(){
        socket.end('Bye, bye');
        console.log(  'Closing' );
    }, 5000); 
    */
    
    // Here we only disconnect if we have no data received
    // for a certain time (idle)
    var timeout = 515000;
    // Set the timeout
    socket.setTimeout(timeout);
    // This will emit the 'timeout' event which we listen to
    // to end the connection.
    socket.on( 'timeout', function() {
        socket.write( 'idle timeout, disconnecting!' );
        socket.end();
    });
    // Possible to keep connections alive by sending empty tcp package
    // see socket.keepAlive(true, timeintervaltosend);
    
// Listening on this port
}).listen( 4000 );


// Notes:
// Only one connection per socket is possible.
// These seem to queued: make a request and make another request.
// Only the first one get the 'something' response and the connection
// stays open. The other one is requesting but gets no response. The
// moment the first connection is ended, the second one is opened.

// Since it's by directional communication, we can end it by sending end message

// References: http://en.wikipedia.org/wiki/WebSocket