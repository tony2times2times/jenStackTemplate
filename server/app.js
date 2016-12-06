var express = require( 'express' );
var app = express();
var path = require( 'path' );
var bodyParser = require( 'body-parser' );
var urlEncodedParser = bodyParser.urlencoded( { extended: false } );
var port = process.env.PORT || 8080;

var events = [];

app.listen( port, function( req, res ){
  console.log( 'server listening on', port );
}); // end spin up server

// base url
app.get( '/', function( req, res ){
  console.log( 'base url hit' );
  res.sendFile( path.resolve( 'views/index.html' ) );
}); // end base url


// testPost
app.post( '/testPost', urlEncodedParser, function( req, res ){
  console.log( 'testPost url hit. req.body:', req.body );
  events.push(req.body);
  console.log('events: ', events);
  // assemble object to return
  var objectToReturn;
  // return objectToReturn
  res.send( events );
}); // end testPost

// static folder
app.use( express.static( 'public' ) );
