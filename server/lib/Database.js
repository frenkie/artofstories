var fs = require('fs');

var Database = function () {
    this.sounds = [];
    this.fetchSounds();
};

Database.prototype = {

    fetchSounds: function () {
        fs.readdir( __dirname +'/../../audio', function (err, files) {
          files.forEach( function (file) {

              this.sounds.push( file );

          }.bind( this ));
        }.bind( this ))
    },

    getAudio: function () {
        return this.sounds;
    },

    save: function ( fileName ) {
        this.sounds.push( fileName );
    }
};

module.exports = new Database();