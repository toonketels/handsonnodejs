// Self executing/invoking function 'schedule'
// It logs somthing after 1sec being called
// and calls itself again (and logs somethign after 1 sec...)

// Not only anonymous functions can be self executing.
(function schedule(){
  setTimeout(function(){
    console.log('Hello world');
    schedule();
  }, 1000);
})();
