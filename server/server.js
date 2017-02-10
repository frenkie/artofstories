/*

 -  Pagina met WebRTC audio opnemen
 -  Server route om op te slaan
 -  lokale DB
 -

*/

server.listen( port, ipAddress, function () {


    app.use( require('./routes/static') );

    //app.use( require('./routes/up') );
    //app.use( require('./routes/thumby') );


    //app.use( require('./routes/error') );

    debug( 'started on localhost:' + port );
} );