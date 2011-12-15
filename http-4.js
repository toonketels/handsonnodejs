// GOAL: uploads file content to server of exercise 3.

// Flow: accept argument
// Create sourcestream (file)
// Create destinationsteam (our server)

var readline = require( 'readline' );
var fs = require( 'fs' );
var http = require( 'http' );

var intface = readline.createInterface( process.stdin, process.stdout, null);
intface.question( 'What file to you wish to upload?\n', function askForFile( answer ){
    console.log( 'You chose ' + answer + '. Good choice!' );
    // Create readstream for file
    var file = __dirname + '/' + answer;
    var options = { encoding: 'utf8' };
    var readStream = fs.createReadStream( file, options );
    var self = this;
    readStream.on('error', function(error) {
       console.log( 'Sorry, file does not exist.' );
    });
    
    var options = {
        port: 4000,
        method: 'POST'
    };
    readStream.pipe( http.request( options, function( response ){
        intface.close();
        process.stdin.destroy();
    }));
});
