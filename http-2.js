// Goal: create a server which will output the time every second.

// Flow:
//  - Create server
//  - Execute a write every second
//  - Eventually end

require( 'http' ).createServer(function( request, response ) {
    response.writeHead( 200, { 'Content-Type' : 'text/plain' } );
    setInterval(function() {
        var date = Date();
        console.log( date );
        response.write( date + "\n", 'utf8');
    }, 1000);
}).listen( 4000 );


// Remarks:
// A request to a resource which is in the process of being
// served is blocked, Requesting another resource is no problem.