// Node使用CommonJS模块规范，内置的require命令用于加载模块文件

var helloModule1 = require("./helloModule_1");
helloModule1.world();

var helloModule2 = require('./helloModule_2');
var hello = new helloModule2();
hello.setName("Paletter");
hello.sayHello();

console.log(module);