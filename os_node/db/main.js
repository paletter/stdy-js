var mysql = require("mysql");

// 1 Connection DB
var connection = mysql.createConnection({
    host: "rds7b07d9fsady5o91w1o.mysql.rds.aliyuncs.com",
    port: 3306,
    user: "fangbo",
    password: "fb996677",
    database: "my_test_tmp"
});

connection.connect();

connection.query("select * from cd_user", function(err, rows, fields) {
    if(err) {
        console.log("err: %s", err);
        throw err;
    }

    console.log("Connection DB ==============================");
    console.log("succ: id %s, userName %s, role %s", rows[0].id, rows[0].userName, rows[0].role);
});

connection.end();

// 2 Pooling connections
var pool  = mysql.createPool({
    connectionLimit : 10,
    host: "rds7b07d9fsady5o91w1o.mysql.rds.aliyuncs.com",
    port: 3306,
    user: "fangbo",
    password: "fb996677",
    database: "my_test_tmp"
});

pool.query("select * from cd_user", function(err, rows, fields) {
    if(err) {
        console.log("err: %s", err);
        throw err;
    }

    console.log("Pooling connections ==============================");
    console.log("succ: id %s, userName %s, role %s", rows[0].id, rows[0].userName, rows[0].role);
});

//pool.end();