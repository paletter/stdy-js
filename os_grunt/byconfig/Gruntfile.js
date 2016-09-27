module.exports = function(grunt){

    // 1 将config文件对象加载后，作为initConfig对象传入

    var taskConfig = grunt.file.readJSON('task-config1.json');

    grunt.initConfig(taskConfig);

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['concat', 'uglify']);
};