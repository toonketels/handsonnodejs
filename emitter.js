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
        // Though we haven't inherited from the EventEmitter object yet,
        // (and as a consequence, we don't have a emit method),
        // we do can call this method because we are inheriting a bit below.
        self.emit( 'tick' );
    }, 1000);
}

// Actual subclass from EventEmitter
util.inherits( Ticker, EventEmitter );



// My object instance
var myTicker = new Ticker();
// We add a listener, this will execute the anonymous function
// that logs TIC
myTicker.addListener( 'tick', function(){
    console.log( 'TICK' );
});