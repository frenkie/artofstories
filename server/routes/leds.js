var debug = require('debug')('artofstories-server');
var express = require('express'); // Docs http://expressjs.com/

var app = express();
var server = require('http').Server( app );

// binding to 0.0.0.0 allows connections from any other computer in the network
// to your ip address
var ipAddress = process.env.IP || '0.0.0.0';
var port = process.env.PORT || 9020;