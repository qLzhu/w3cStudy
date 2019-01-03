
1.1.
```
npm init -y
npm install --save-dev webpack webpack-cli
npm install --save lodash
```

1.2.修改本地的`package.json`文件，删除`"main": "index.js"`，添加`"private": true`，确保我们安装包是私有的(private)，并且移除 main 入口。这可以防止意外发布你的代码

1.3、全部设置完成后，执行`npx webpack`，npx 是 Node 8.2+ 版本提供的命令

注意事项：在安装一个要打包到生产环境的安装包时，你应该使用`npm install --save`，如果你在安装一个用于开发环境的安装包（例如，linter, 测试库等），你应该使用`npm install --save-dev`


2.1、设置webpack的配置文件 `webpack.config.js`，如果不设置配置文件的话，webpack默认把`./src/index.js`文件作为入口文件，然后输出`./dist/main.js`

2.2、设置完成后执行`npx webpack --config webpack.config.js`


3.1、可以配置`package.json`文件，用来代替`npx webpack`命令，在`scripts`里面配置，例如：
```
"build": "webpack"
```
执行
```
npm run build
```