function fn1() {
    var module_1 = require("module_1");
    var module_2 = require("module_2");

    console.log("Action1:%s", module_1.name);
    console.log("Action1:%s", module_2.name);
}

fn1();