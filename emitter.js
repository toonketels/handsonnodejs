// To emit events, we need to inherit from EventEmitter object
var EventEmitter = require( 'events' ).EventEmitter;
// Use the util object to make the inheritance happend
var util = require( 'util' );

// Our object initiatizer function.
var Ticker = function() {
    
    // Assign reference to current object to self.
    // Necesary the call the emit method of this object
    // within the anonymous function.
    // Wouldn't be possible with self
    var self = this;
    setInterval( function() {
        self.emit( 'tick' );
    }, 1000);
}

util.inherits( Ticker, EventEmitter );


// new
var myTicker = new Ticker();
myTicker.addListener( 'tick', function(){
    console.log( 'TICK' );
});
