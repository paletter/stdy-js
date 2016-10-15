
module.exports = function(grunt){

    grunt.initConfig({
        requirejs: {
            compile: {
                options: {
                    baseUrl: "./js",
                    mainConfigFile: "js/main.js", // 路径以 Grunt.js 为根目录
                    include: [ "main.js" ], // 路径以 baseUrl 为根目录; 加载的js在这配置
                    out: "dest/main.js"
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-requirejs');

    grunt.registerTask('default', ['requirejs']);

};