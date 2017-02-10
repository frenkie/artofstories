var debug = require('debug')('artof-server');
var fs = require('fs');
var express = require('express'); // Docs http://expressjs.com/
var https = require('https');

var app = express();
var options = {
    key: fs.readFileSync( __dirname +'/server.key'),
     cert: fs.readFileSync( __dirname +'/server.crt'),
    passphrase: 'frenkie',
 requestCert: false,
 rejectUnauthorized: false
};

var server = https.createServer( options, app );

// binding to 0.0.0.0 allows connections from any other computer in the network
// to your ip address
var ipAddress = process.env.IP || '0.0.0.0';
var port = process.env.PORT || 9090;

server.listen( port, ipAddress, function () {

    app.use( require('./routes/static') );
    app.use( require('./routes/audio') );
    app.use( require('./routes/save') );
    // app.use( require('./routes/leds') );

    debug( 'started on localhost:' + port );
} );