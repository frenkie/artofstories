var express = require('express');

var debug = require('debug')('artof-leds');
var router = express.Router();

var five = require("johnny-five");
var board = new five.Board();

router.get( '/leds/:nr', function ( httpRequest, httpResponse ) {

    if ( httpRequest.params.nr ) {

        httpResponse.send( 'We gaan ledje '+ httpRequest.params.nr +' aanzetten' );
		
		myLed = new five.Led(httpRequest.params.nr);
		myLed.off();		

    } else {
        httpResponse.status( 400 );
        httpResponse.send( 'Bad request' );
    }
});

module.exports = router;