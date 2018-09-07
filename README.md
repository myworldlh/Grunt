# Grunt
Grunt学习笔记

#### Tips
git bash的上下选择和空格选中操作是有问题的，使用cmd是可以的

#### Yeoman
在Web项目的立项阶段，使用yeoman来生成项目的文件，代码结构
#### Yeoman 下载
```
npm install -g yo
```
查看版本
```
yo --version
```

#### Bower
Web包管理器，下载需要引入的包
#### Bower 下载
```
npm install -g bower
```
查看版本
```
bower -v
```

#### Grunt
Build Tool，压缩、测试、校验代码等工具
#### Grunt 下载
```
npm install -g grunt-cli
```
查看版本
```
grunt -version
```


#### yeoman generator
安装生成器generator，使用npm命令，要安装的npm包前加入generator
```
npm install -g generator-anguler
```
使用yeoman的时候，生成的依赖包会安装到当前目录，所以先创建一个项目目录
```
yo generator的名字 项目名字
```

#### bower 使用
```
bower install jquery
```
* (jquery/jquery) 是jquery在github上的短写，如果bower没有收录想要下载的包，则可以使用github上的地址来下载
```
bower install jquery/jquery
```
* 也可以使用github的完整地址：https://github.com/jquery/jquery.git
```
bower install https://github.com/jquery/jquery.git
```

生成bower.json（git bash下会报错，可能是因为权限不够，可以使用cmd来生成）
```
bower init
bower install jquery --save-dev 将jquery加入到开发环境中devDependencies
bower install jquery --save 将jquery加入到生产环境中dependencies
```

#### 构建Grunt项目
生成package.json
```
npm init
```
下载grunt，添加依赖到开发环境中
```
npm install grunt --save-dev
```
下载grunt插件load-grunt-tasks,time-grunt
```
npm install load-grunt-tasks --save-dev
npm install time-grunt --save-dev
```
创建Gruntfile.js
```
vim Gruntfile.js
```
安装基本的task任务
```
npm install grunt-contrib-copy --save-dev  // 文件拷贝
npm install grunt-contrib-clean --save-dev  // 文件删除
```
运行`copy`命令、`clean`命令
```
grunt copy  // 只写命令名则调用改命令下的所有target
grunt clean

grunt copy:dist_js  // 只调用一个命令中的其中一个target
```

#### Grunt Files的处理方式
```
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
                src: '<%= config.dist %>/**/*',  // **匹配任意长度任意字符，*匹配任意长度字符除了反斜杠\，?匹配任意一个字符除了反斜杠，!取反
                // 过滤
                filter: function(filepath){
                    return (!grunt.file.isDir(filepath)); // 保留文件夹
                },
                // dot: true,  // 命中以.开头的文件
            }
        }
    });
```

#### Grunt tasks - grunt server

