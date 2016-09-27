
module.exports = function(grunt){

    grunt.initConfig({
        requirejs: {

        }
    });

    grunt.loadNpmTasks('grunt-contrib-requirejs');

    grunt.registerTask('default', ['requirejs']);

};