'use strict';

module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.registerTask('default', ['connect:server']);


    grunt.initConfig({
        conf: {
            app_root: ''
        },
        connect: {
            options: {
                port: 8002
            },
            server: {
                options: {
                    open: true,
                    keepalive: true,
                    base: '<%= conf.app_root %>'
                }
            }
        }
    });

};