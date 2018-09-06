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
```yo --version```

#### Bower
Web包管理器，下载需要引入的包
#### Bower 下载
```npm install -g bower```
查看版本
```bower -v```

#### Grunt
Build Tool，压缩、测试、校验代码等工具
#### Grunt 下载
```npm install -g grunt-cli```
查看版本
```grunt -version```


#### yeoman generator
安装生成器generator，使用npm命令，要安装的npm包前加入generator
```npm install -g generator-anguler```
使用yeoman的时候，生成的依赖包会安装到当前目录，所以先创建一个项目目录
```yo generator的名字 项目名字```

#### bower 使用
```bower install jquery```
* (jquery/jquery) 是jquery在github上的短写，如果bower没有收录想要下载的包，则可以使用github上的地址来下载
```bower install jquery/jquery```
* 也可以使用github的完整地址：https://github.com/jquery/jquery.git
```bower install https://github.com/jquery/jquery.git```

生成bower.json（git bash下会报错，可能是因为权限不够，可以使用cmd来生成）
```bower init```
```bower install jquery --save-dev 将jquery加入到开发环境中devDependencies```
```bower install jquery --save 将jquery加入到生产环境中dependencies```
