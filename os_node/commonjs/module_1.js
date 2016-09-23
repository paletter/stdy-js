var x = 5;
var addX = function(y) {
    return y + x;
};

module.exports.x = x;
module.exports.addX = addX;

// 上面代码通过module.exports对象，定义对外接口，输出变量x和函数addX。module.exports对象是可以被其他文件导入的，它其实就是文件内部与外部通信的桥梁