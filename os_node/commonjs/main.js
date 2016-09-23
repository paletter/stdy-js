// CommonJS模块的特点如下
// 1 所有代码都运行在模块作用域，不会污染全局作用域
// 2 模块可以多次加载，但是只会在第一次加载时运行一次，然后运行结果就被缓存了，以后再加载，就直接读取缓存结果。要想让模块再次运行，必须清除缓存
// 3 模块加载的顺序，按照其在代码中出现的顺序

var module1 = require("./module_1");
console.log(module1.x);
console.log(module1.addX(1));

var module2 = require("./module_2");
console.log(module2.x);
console.log(module2.subX(1));