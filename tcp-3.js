var net = require('net');

if (process.argv.length < 4) {
  console.log('Usage: ' + process.argv[0] + ' ' + process.argv[1] + ' <host> <port>');
  return;
}

var host = process.argv[2],
    port = process.argv[3];
    
var conn = net.createConnection(port, host);

// Necesary for stdin to work
process.stdin.resume();
// Since our stdin is the source, pipe it to the connection
process.stdin.pipe(conn);
// Since the connection can be the source, pipe it to stdout
conn.pipe(process.stdout, {end: false});