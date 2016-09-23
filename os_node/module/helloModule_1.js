// Node内部提供一个Module构建函数。所有模块都是Module的实例

// 根据CommonJS规范，一个单独的文件就是一个模块。每一个模块都是一个单独的作用域，也就是说，在一个文件定义的变量（还包括函数和类），都是私有的，对其他文件是不可见的
// CommonJS规定，每个文件的对外接口是module.exports对象。这个对象的所有属性和方法，都可以被其他文件导入

// 每个模块内部，都有一个module对象，代表当前模块。它有以下属性
// 1 module.id 模块的识别符，通常是带有绝对路径的模块文件名
// 2 module.filename 模块的文件名，带有绝对路径
// 3 module.loaded 返回一个布尔值，表示模块是否已经完成加载
// 4 module.parent 返回一个对象，表示调用该模块的模块
// 5 module.children 返回一个数组，表示该模块要用到的其他模块
// 6 module.exports 表示模块对外输出的值

module.exports.world = function() {
    console.log("Hello Moudle 1");
};

console.log("module.id: %s", module.id);
console.log("module.filename: %s", module.filename);
console.log("module.loaded: %s", module.loaded);
console.log("module.parent: %s", module.parent);
console.log("module.children: %s", module.children);
console.log("module.exports: %s", module.exports);
