// 安装 Express 并将其保存到依赖列表中
// npm install express --save

var express = require("express");
var app = express();

app.get("/", function(req, res) {
    res.send("Express!");
});

app.get("/test", function(req, res) {
    res.send("Express Test!");
});

app.get("/test_get", function(req, res) {
    response = {
        // 获取Get请求参数方法
        first_name:req.query.first_name,
        last_name:req.query.last_name
    };
    console.log(response);
    res.end(JSON.stringify(response));
});

app.get("/test_post", function(req, res) {
    response = {
        // 获取Post请求参数方法
        first_name:req.body.first_name,
        last_name:req.body.last_name
    };
    console.log(response);
    res.end(JSON.stringify(response));
});

var server = app.listen(8888, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log("Url: http://%s:%s", host, port);
});