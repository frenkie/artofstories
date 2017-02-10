var express = require('express');

var debug = require('debug')('artof-leds');
var router = express.Router();

router.get( '/leds/:nr', function ( req, res ) {

    if ( req.params.nr ) {

        res.send( 'We gaan ledje '+ req.params.nr +' aanzetten' );

    } else {
        res.status( 400 );
        res.send( 'Bad request' );
    }
});

module.exports = router;