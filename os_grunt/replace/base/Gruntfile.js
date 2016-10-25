module.exports = function(grunt){

    grunt.initConfig({
        replace: {
            dist: {
                options: {
                    patterns: [
                        {
                            match: 'name',
                            replacement: 'James'
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