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
                    jquery:true,
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
            casperjs:{
                options:{casperjsOptions: ['--verbose','--log-level=debug']},
                files:['test/casper/casper.js']
            },
            'http-server':{
            dev:{
            root:'.',
            port:8282,
            host:"127.0.0.1",
            runInBackround:true
            }
            },
            qunit:{
            all: ['test/qunit.htm']
            },
            watch:{
                jshint:{
                    files:['Gruntfile.js','js/*.js','test/casper/casper.js','test/*.js'],
                    tasks:'jshint'
                }
            }
        });
               grunt.loadNpmTasks('grunt-contrib-jshint');
               grunt.loadNpmTasks('grunt-contrib-watch');
               grunt.loadNpmTasks('grunt-casperjs');
               grunt.loadNpmTasks('grunt-http-server');
               grunt.loadNpmTasks('grunt-contrib-qunit');
               grunt.registerTask('default','jshint');
    };
