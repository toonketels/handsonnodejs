var http = require('http'),
    fs = require('fs');

// Process is global object
// argv: array of command line arguments
//  1. node
//  2. name js file
if (process.argv.length < 5) {
  console.log('Usage: ' + process.argv[0] + ' ' + process.argv[1] + ' <host> <port> <file_path>');
  return;
}

var options = {
  host: process.argv[2],
  port: parseInt(process.argv[3], 10),
  path: '/',
  method: 'PUT'
};

// Specify request to be piped to
var req = http.request(options);

console.log('piping ' + process.argv[4]);
// We create a readstrem, which is the file
// send pipe message on source to request
fs.createReadStream(process.argv[4]).pipe(req);