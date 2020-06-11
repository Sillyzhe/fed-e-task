# 自动化构建——一切重复工作本应自动化

源代码====自动化构建====>生产代码  

自动化构建工作流  
作用：脱离运行环境兼容带来的问题  
使用提高效率的语法、规范和标准

- ECMAScript Next
- Sass
- 模板引擎

这些用法大都不被浏览器直接支持  

构建转换那些不被支持的“特性”

## 自动化构建初体验

```browser-sync``` 启动测试服务器
```npm-run-all``` 同时执行多个Script命令


```"build": "sass scss/main.scss css/style.css --watch",
    "preserver": "npm run build",
    "serve": "browser-sync . --files \"css/*.css\"",
    "start":"run-p build serve"
```

```--watch``` 监听文件变化
```--files \"css/*.css\""``` 监听文件变化

## 常用的自动化构建工具

### grunt
优点：最早的构建系统，插件系统生态完善。
缺点：工作过程基于临时文件，构建过程较慢


### Gulp
优点：基于内存构建，默认支持同时执行多个任务，插件系统也完善。最受欢迎的
### FIS
捆绑套餐，大而全，适合新手