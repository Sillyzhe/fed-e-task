// gulp的入口文件

// ----------------------------------------------
// gulp的基本使用
// exports.foo = (done) => {
//     console.log('foo task working~')
//     done() //表示任务完成
// }

// exports.default = done => {
//     console.log('default task working~')
//     done()
// }

// const gulp = require('gulp')

// gulp.task('bar', done => {
//     console.log('bar working')
//     done()
// })


// -------------------------------------------------
// 创建组合任务

// const {
//     series,
//     parallel
// } = require('gulp')

// const task1 = done => {
//     setTimeout(() => {
//         console.log('task1 working~')
//         done()
//     }, 1000);
// }

// const task2 = done => {
//     setTimeout(() => {
//         console.log('task2 working~')
//         done()
//     }, 1000);
// }

// const task3 = done => {
//     setTimeout(() => {
//         console.log('task3 working~')
//         done()
//     }, 1000);
// }

// 串行结构
// exports.foo = series(task1, task2, task3)

// 并行结构
// exports.bar = parallel(task1, task2, task3)


// ------------------------------------
// 异步任务的三种方式

// const fs = require('fs')

// exports.callback = done => {
//     console.log('callback task~')
//     done()
// }

// exports.callback_error = done => {
//     console.log('callback task')
//     done(new Error('task failed!'))
// }

// exports.promise = () => {
//     console.log('promise task~')
//     return Promise.resolve()
// }

// exports.promise_error = () => {
//     console.log('promise task~')
//     return Promise.reject(new Error('task failed~'))
// }

// const timeout = time => {
//     return new Promise(resolve => {
//         setTimeout(resolve, time);
//     })
// }

// exports.async = async () => {
//     await timeout(1000)
//     console.log('async task~')
// }

// exports.stream = () => {
//     const readStream = fs.createReadStream('package.json')
//     const writeStream = fs.createWriteStream('temp.txt')
//     readStream.pipe(writeStream)
//     return readStream
// }

// exports.stream = (done) => {
//     const readStream = fs.createReadStream('package.json')
//     const writeStream = fs.createWriteStream('temp.txt')
//     readStream.pipe(writeStream)
//     readStream.on('end', () => {
//         done()
//     })
// }


// ------------------------------------------------
// 构建过程核心工作原理
// 读取流（输入）========>转换流（加工）=========>写入流（输出）

// const fs = require('fs')
// const {
//     Transform
// } = require('stream')

// exports.default = () => {
//     // 文件读取流
//     const readStream = fs.createReadStream('normalize.css')
//     // 文件写入流
//     const writeStream = fs.createWriteStream('normalize.min.css')

//     const transform = new Transform({
//         transform: (chunk, encoding, callback) => {
//             //  核心转换过程实现
//             // chunk=>读取流中读取到的内容(Buffer)
//             const input = chunk.toString()
//             const output = input.replace(/\s+/g, '').replace(/\/\*.+?\*\//g, '')
//             callback(null, output)
//         }
//     })
//     // 把读取出来的文件流导入写入文件流
//     readStream
//         .pipe(transform) //转换
//         .pipe(writeStream) //写入
//     return readStream
// }


// ---------------------------------------
// 文件操作API+插件的使用

// const {
//     src,
//     dest
// } = require('gulp')
// const cleanCss = require('gulp-clean-css')
// const rename = require('gulp-rename')
// exports.default = () => {
//     return src('src/normalize.css')
//         .pipe(cleanCss())
//         .pipe(rename({
//             extname: '.min.css'
//         }))
//         .pipe(dest('dist'))
// }


// ------------------------------------
// 自动化构建案例