var fs = require( 'fs' );
var Q = require( 'q' );

var Database = function () {

};

Database.prototype = {

    getSounds: function () {

        var deferred = Q.defer();

        fs.readdir( __dirname + '/../../audio', function ( err, files ) {

            var sounds = [];

            if ( err ) {
                deferred.reject();
            } else {
                files.forEach( function ( file ) {
                    if ( !/^\./.test( file ) ) {
                        sounds.push( file );
                    }
                } );
                deferred.resolve( sounds );
            }
        } );

        return deferred.promise;
    }
};

module.exports = new Database();