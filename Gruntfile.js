'use strict';
 module.exports=function(grunt) {
    grunt.initConfig({
        jshint:{
            all: {
                src:['js/*.js','Gruntfile.js'],
                options:{
                    curly: true,
                    node:true,
                    eqeqeq: true,
                    immed: true,
                    latedef: true,
                    newcap: true,
                    noarg: true,
                    sub: true,
                    undef: true,
                    boss: true,
                    eqnull: true,
                    browser: true,
                    globals: {
                        require: true,
                        define: true,
                        requirejs: true,
                        describe: true,
                        expect: true,
                        it: true
                    }
                }
            }},
            watch:{
                jshint:{
                    files:'js/*.js',
                    tasks:'jshint'
                }
            }
        });
               grunt.loadNpmTasks('grunt-contrib-jshint');
               grunt.loadNpmTasks('grunt-contrib-watch');
               grunt.loadNpmTasks('grunt-bower-task');
               grunt.registerTask('default','jshint');

    };
