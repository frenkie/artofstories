var express = require('express');
var database = require('../lib/Database');
var debug = require('debug')('artof-audio');
var router = express.Router();

router.get( '/audio', function ( httpRequest, httpResponse ) {

    database.getSounds().then( function ( sounds ) {

        httpResponse.type('json').send({
            audio: sounds
        });

    }, function () {
        debug('hmm, audio fetching fail, just return an empty list');
        httpResponse.type('json').send({
            audio: []
        });
    });
});

module.exports = router;