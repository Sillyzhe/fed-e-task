// Node CLI 应用入口文件必须要有这样的文件夹
// 如果是Linux或者MacOS系统下还需要修改此文件的读写权限为755
// 具体就是通过chmod 755 cli.js实现修改

// console.log('cli working')

// 脚手架的工作过程
// 1.通过命令行交互询问用户问题
// 2.根据用户回答的结果生成文件
const fs = require('fs')
const path = require('path')
const inquirer = require('inquirer')

inquirer.prompt({
    type: 'input',
    name: 'name',
    message: 'Project name?'
}).then(anwsers => {
    // console.log(anwsers)
    // 根据用户回答的结果生成文件

    // 模板目录
    const tmpDir = path.join(__dirname,'templates')
    //目标目录 
    const destDir=process.cwd()

    // 将模板下的文件全部转换到目标目录
    fs.readdir(tmpDir,(err,files)=>{
        if(err)throw err;
        files.forEach(item=>{
            console.log(item)
            // 通过模板引擎渲染文件
        })
    })

})