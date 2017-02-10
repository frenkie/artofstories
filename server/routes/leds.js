var express = require('express');

var debug = require('debug')('artof-leds');
var router = express.Router();

var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {

    var ledChoice = [
        0, 1, 2,
        0, 1, 2,
        0, 1, 2,
        0, 1, 2,
        0, 1, 2,
        0, 1, 2,
        0, 1, 2,
        0, 1, 2,
        0, 1, 2,
        0, 1, 2,
        0, 1, 2,
        0, 1, 2,
        0, 1, 2,
        0, 1, 2,
        0, 1, 2,
        0, 1, 2,
        0, 1, 2,
        0, 1, 2,
        0, 1, 2,
        0, 1, 2,
        0, 1, 2,
        0, 1, 2,
        0, 1, 2,
    ];

    var leds = [
        new five.Led( 11 ),
        new five.Led( 12 ),
        new five.Led( 13 )
    ];

    router.get( '/leds/:nr', function ( httpRequest, httpResponse ) {

        if ( httpRequest.params.nr ) {

            var ledje = ledChoice[ parseFloat( httpRequest.params.nr ) ];

            httpResponse.send( 'We gaan ledje '+ ledje +' aanzetten' );

            leds.forEach(function ( led) {
               led.off();
            });

            leds[ ledje ].on();

        } else {
            httpResponse.status( 400 );
            httpResponse.send( 'Bad request' );
        }
    });

});


module.exports = router;