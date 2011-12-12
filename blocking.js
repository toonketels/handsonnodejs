// Example of blocking operation.
// The while loop keeps the eventloop blocked
// so we never reach the setTimeout callback.
// So this will keep going no forever.

var open = false;

setTimeout(function(){
  open = true;
}, 2000);

while(!open) {
  console.log('waiting');
}

console.log('opened!');