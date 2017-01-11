var redis = require("redis");

var port = 6379;
var host = "127.0.0.1";

var client = redis.createClient(port, host, {});

client.on("ready", function(res) {
    console.log("Ready!");
});

//client.on("connect", function() {
//    client.set("test1", "1", redis.print);
//    client.get("test1", redis.print);
//
//    client.set("test1", "1");
//    client.get("test1");
//});

client.set("test2", "1", redis.print);
client.get("test2", redis.print);
