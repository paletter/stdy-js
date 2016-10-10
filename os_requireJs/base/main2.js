// 当网页需要加载的JS可能来自本地服务器、其他网站或CDN，就得通过require.config是用来配置模块加载位置
require.config({
    baseUrl: "./",
    paths: {
        "jquery": ["http://upcdn.b0.upaiyun.com/libs/jquery/jquery-1.8.1.min"],
        "module_2": "./module_2"
    }
});

require(["jquery", "./module_1", "module_2"], function($, module_1, module_2) {

    console.log(module_2.name);

    alert("Load finished");
});