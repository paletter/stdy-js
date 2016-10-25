module.exports = function(grunt){

    grunt.initConfig({
        replace: {
            dist: {
                options: {
                    patterns: [
                        {
                            json: grunt.file.readJSON("config/config.json")
                        }
                    ]
                },
                files: [
                    {expand: true, flatten: true, src: ['js/main.js'], dest: 'dest/'}
                ]
            }
        }
    });

    grunt.loadNpmTasks('grunt-replace');

    grunt.registerTask('default', ['replace']);

};