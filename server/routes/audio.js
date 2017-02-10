var express = require('express');
var database = require('../lib/Database');
var debug = require('debug')('artof-audio');
var router = express.Router();

router.get( '/audio', function ( httpRequest, httpResponse ) {

    httpResponse.type('json').send({
        audio: database.getAudio()
    });
});

module.exports = router;