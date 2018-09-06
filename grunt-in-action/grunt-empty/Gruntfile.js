/*------------ 申明es5严格模式 -------------*/
'use strict';

/*------------ 基本框架 -------------*/
module.exports = function(grunt){
    /*------------ 引入组建 -------------*/
    require('load-grunt-tasks')(grunt);
    require('time-grunt')(grunt);
    
    /*------------ 配置项目路径 -------------*/
    var config = {
        app: 'app',
        dist: 'dist'
    }

    /*------------ 任务配置 -------------*/
    grunt.initConfig({
        config: config,

        // copy命令
        copy: {
            // 写法一：
            /*dist_html: {
                src: '<%= config.app %>/index.html', // 源文件目录
                dest: '<%= config.dist %>/index.html' // 目标文件目录
            },
            dist_js: {
                src: '<%= config.app %>/js/index.js',
                dest: '<%= config.dist %>/js/index.js'
            },*/
            // 写法二：
            /*dist: {
                files: [
                    {
                        src: '<%= config.app %>/index.html',
                        dest: '<%= config.dist %>/index.html'
                    },
                    {
                        src: '<%= config.app %>/js/index.js',
                        dest: '<%= config.dist %>/js/index.js'
                    }
                ]
            }*/
            // 写法三
            dist: {
                // 目标文件目录为key，源文件目录为value，src支持数组
                /*files: {
                    '<%= config.dist %>/index.html': '<%= config.app %>/index.html',
                    '<%= config.dist %>/js/index.js': ['<%= config.app %>/js/index.js']
                }*/

                // expand动态目录
                files: [
                    {
                        expand: true,
                        cwd: '<%= config.app %>/',  // 源文件目录
                        src: '**/*.js',  // 匹配的文件
                        dest: '<%= config.dist %>/',  // 目标目录
                        ext: '.min.js',  // 替换文件后缀
                        extDot: 'last',  // 从第几个'.'开始替换
                        // flatten: true,  // 拷贝文件，但是不保留各层目录
                        // rename: function(dest, src){  // 在ext和extDot之后执行，可以在设置了flatten: true后再次恢复js目录
                        //     return dest + 'js/' + src;
                        // }
                    }
                ]
            }
        },

        clean: {
            dist: {
                // src: ['<%= config.dist %>/index.html', '<%= config.dist %>/js/index.js']
                src: '<%= config.dist %>/**/*',  // **匹配任意长度任意字符，*匹配任意字符除了反斜杠\，?匹配任意一个字符除了反斜杠，!取反
                // 过滤
                filter: function(filepath){
                    return (!grunt.file.isDir(filepath)); // 保留文件夹
                },
                // dot: true,  // 命中以.开头的文件
            }
        }
    });
}