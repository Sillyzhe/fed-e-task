# 脚手架工具——前端工程化的发起者



## 脚手架的作用
脚手架的本质作用——创建项目基础结构、提供项目规范和约定

- 相同的组织结构
- 相同的开发范式
- 相同的模块依赖
- 相同的工具配置
- 相同的基础代码


## 常用的脚手架工具
- React==>create-react-app
- Vue==>vue-cli
- Angular=>angular-cli  
- Yeoman==>通用脚手架 创建项目使用
- Plop==>项目开发过程中创建特定类型文件  例如创建一个组件/模块所需要的文件

根据信息创建对应的项目基础结构




## 通用脚手架工具剖析

### Yeoman——The web's scaffolding tool for modern webapps
- 全局范围安装yo
```$ yarn global add yo```
- 安装对应的generator
```$ yarn global add generator node```
- 通过yo运行generator
```$ yo node```

### Yeoman Sub Generator
```$ yo node:cli```   

### 常规使用步骤
1. 明确使用需求
2. 找到合适的Generator
3. 全局范围安装找到的Generator
4. 通过Yo运行相应的Generator
5. 通过命令行交互填写选项
6. 生成你所需要的项目结构

#### 自定义Generator——基于Yeoman搭建自己的脚手架

#### 创建Generator——本质上就是一个NPM模块

### Plop——一个小而美的脚手架工具

## 开发一款脚手架


### 脚手架的工作原理
