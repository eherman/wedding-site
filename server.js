var bodyParser = require('body-parser');
var hbs = require('hbs');
var express = require('express');

var app = express();

app.set('view engine', 'hbs');

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.render('main');
});

app.get('/fake', function(req, res) {
	res.render('fake');
});

var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080;
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
app.listen(server_port, server_ip_address, function () {
	console.log( "Listening on " + server_ip_address + ", server_port " + server_port );
});
