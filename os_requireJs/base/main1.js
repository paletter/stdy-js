// require API的第一个参数是一个数组，即使只有一个依赖，你也必须使用数组来定义
// require API的第二个参数是callback，一个function，是用来处理加载完毕后的逻辑
require(["./module_1"], function() {
    alert("Load finished");
});