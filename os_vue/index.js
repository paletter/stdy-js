var express = require("express");
var path = require("path");
var app = express();

app.get('/basic', function(req, res){
  res.sendFile(path.join(__dirname, '/basic/index.html'));
});

app.get('/router', function(req, res){
  res.sendFile(path.join(__dirname, '/router/index.html'));
});

app.get('/router/home', function(req, res){
  res.sendFile(path.join(__dirname, '/router/home.html'));
});

var server = app.listen(8888, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log("Url: http://%s:%s", host, port);
});
