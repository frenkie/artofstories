var express = require('express');

var debug = require('debug')('artof-leds');
var router = express.Router();

router.get( '/leds/:nr', function ( httpRequest, httpResponse ) {

    if ( httpRequest.params.nr ) {

        httpResponse.send( 'We gaan ledje '+ httpRequest.params.nr +' aanzetten' );

    } else {
        httpResponse.status( 400 );
        httpResponse.send( 'Bad request' );
    }
});

module.exports = router;