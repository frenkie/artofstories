var bodyParser = require('body-parser');
var debug = require('debug')('artof-save');
var express = require('express');
var fs = require('fs');
var Q = require('q');
var router = express.Router();

function saveAudio ( audioData ) {

    var deferred = Q.defer();
    var name = 'audio'+ Date.now() +'.webm';

    debug('we gaan audio saven: +'+ name );

    fs.writeFile( __dirname +'/../../audio/'+ name, audioData, 'base64', function ( err ) {
        if ( err ) {
            deferred.reject();
        } else {
            deferred.resolve();
        }
    });

    return deferred.promise;
}

router.post('/save', bodyParser.text({
    limit: '8MB'
}), function ( req, res ) {

    var base64Data = req.body.replace( /^data:audio\/webm;base64,/, '');

    saveAudio( base64Data ).then( function () {
        debug('audio gesaved!');
        res.send('ok');
    }, function () {
        res.send('notok');
    });

});

module.exports = router;