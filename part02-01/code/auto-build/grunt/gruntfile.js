// Grunt的入口文件
// 用于定义一些需要Grunt自动执行的任务
// 需要导出一个函数
// 此函数接收一个grunt的形参，内部提供一些创建任务是可以用到的API

module.exports = grunt => {

    // -------------------------------------------------

    // 初次尝试
    // grunt.registerTask('foo', () => {
    //     console.log('hello grunt~')
    // })

    // 可以定义多个task
    // grunt.registerTask('bar', '任务描述', () => {
    //     console.log('other task~')
    // })

    // 默认task
    // grunt.registerTask('default',()=>{
    //     console.log('default grunt~')
    // })

    // 默认task组
    // grunt.registerTask('default', ['foo', 'bar'])

    // 异步执行失败
    // grunt.registerTask('async-task',()=>{
    //     setTimeout(() => {
    //         console.log('async task working~')
    //     }, 1000);
    // })

    // 异步任务需要定义this.async()告诉grunt异步执行完成
    // grunt.registerTask('async-task', function () {
    //     const done = this.async()
    //     setTimeout(() => {
    //         console.log('async task working')
    //         done()
    //     }, 1000);
    // })


    // -----------------------------------
    // 标记失败任务
    // grunt.registerTask('bad', () => {
    //     console.log('bad wordking~')
    //     return false
    // })

    // 异步执行失败
    // grunt.registerTask('async-bad',function(){
    //     const done=this.async()
    //     setTimeout(() => {
    //         console.log('bad async')
    //         done(false)
    //     }, 1000);
    // })

    // grunt.registerTask('default', ['foo', 'async-bad', 'bar'])



    // -------------------------------------------
    // 配置选项方法
    // grunt.initConfig({
    //     // foo:'bar'
    //     foo: {
    //         bar: 123
    //     }
    // })
    // grunt.registerTask('foo', () => {
    //     console.log(grunt.config('foo.bar'))
    // })

    // -------------------------------------------
    // 多目标模式——可以让任务根据配置形成多个子任务
    // grunt.initConfig({
    //     build: {
    //         options: {
    //             foo: 'bar'
    //         },
    //         css: '1',
    //         js: '2'
    //     }
    // })
    // grunt.registerMultiTask('build', function () {
    //     console.log(this.options())
    //     console.log(`targer:${this.target},data:${this.data}`)
    // })

    // -------------------------------------------------------
    // 插件的使用
    // grunt.initConfig({
    //     clean: {
    //         // temp: 'temp/app.js'
    //         // temp: 'temp/*.js'
    //         temp: 'temp/**'
    //     }
    // })
    // grunt.loadNpmTasks('grunt-contrib-clean')

    // --------------------------
    // 实现常用的构建任务
    const sass = require('sass')
    const loadGruntTasks = require('load-grunt-tasks')
    grunt.initConfig({
        sass: {
            options: {
                sourceMap: true,
                implementation: sass
            },
            main: {
                files: {
                    'dist/css/main.css': 'src/scss/main.scss'
                }
            }
        },
        babel: {
            options: {
                sourceMap: true,
                presets: ['@babel/preset-env']
            },
            main: {
                files: {
                    'dist/js/app.js': 'src/js/app.js'
                }
            }
        },
        watch: {
            js: {
                files: ['src/js/*.js'],
                tasks: ['babel']
            },
            css: {
                files: ['src/scss/*.scss'],
                tasks: ['sass']
            }
        }
    })


    loadGruntTasks(grunt)

    grunt.registerTask('default', ['sass', 'babel', 'watch'])
    // grunt.loadNpmTasks('grunt-sass')
}