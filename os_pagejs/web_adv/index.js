var express = require("express");
var path = require("path");
var fs = require('fs');
var app = express();

app.get('/page.js', function(req, res) {
  res.sendFile(path.join(__dirname, '..', 'node_modules/page/page.js'));
});

app.get('/router.js', function(req, res) {
  res.sendFile(path.join(__dirname, '/router.js'));
});

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.get('/welcome', function(req, res){
  res.sendFile(path.join(__dirname, '/welcome.html'));
});

app.get('/content', function(req, res){
  res.sendFile(path.join(__dirname, '/content.html'));
});

var server = app.listen(8888, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log("Url: http://%s:%s", host, port);
});
