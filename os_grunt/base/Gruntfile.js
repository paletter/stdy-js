// 1 在 Gruntfile.js 根目录下输入grunt进行压缩操作
// 2 压缩任务文件必须以 Gruntfile.js 命名
// 3 grunt命令相当于grunt default（grunt命令默认执行default任务），要想运行不同的任务可以用 grunt [任务名] 的方式运行

// Gruntfile一般要完成两件事：
// 1 读取package信息（pkg: grunt.file.readJSON('package.json')）
// 2 插件加载、注册任务，运行任务（grunt对外的接口全部写在这里面）

// Grunt插件：
// uglify：压缩
// concat：合并

// * 特别注意，引用grunt插件的方法，以grunt-contrib-concat插件为例
// 1 加载任务 grunt.loadNpmTasks('grunt-contrib-concat')
// 2 在grunt的config里面必须对"concat"这个变量进行配置
// 3 grunt运行的task名必须是"concat"，对应的是 grunt-contrib-concat/tasks/concat.js
// * 以上三步一个也不能错，否则插件任务引用失败

module.exports = function(grunt){

    grunt.initConfig({

        pkg: grunt.file.readJSON('task-config.json'),

        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: ['js/grunt1.js', 'js/grunt2.js'],
                dest: 'dest/domop.js'
            }
        },

        uglify: {
            options: {
                stripBanners: true,
                banner: '/*! <%=pkg.name%>-<%=pkg.version%>.js <%=grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            bulid: {
                src: 'dest/domop.js',
                dest: 'dest/domop.min.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['concat', 'uglify']);

};