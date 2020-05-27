// // Functor 函子
// -----------面向对象写法
// class Container {
//     constructor(value) {
//         this._value = value;
//     }
//     map(fn) {
//         return new Container(fn(this._value))
//     }
// }

// new Container(5).map(x => x + 1)
// let r = new Container(5).map(x => x + 1).map(x => x * x)
// console.log(r)

// 
// class Container {
//     static of (value) {
//         return new Container(value)
//     }
//     constructor(value) {
//         this._value = value;
//     }
//     map(fn) {
//         return Container.of(fn(this._value))
//     }
// }
// let r = Container.of(5).map(x => x + 2).map(x => x * x)
// console.log(r)

// 演示 null undefined 的问题
// Container.of(null).map(x=>x.toUpperCase())


// MayBe 函子

// class MayBe {
//     static of (value) {
//         return new MayBe(value)
//     }
//     constructor(value) {
//         this._value = value;
//     }
//     map(fn) {
//         return this.isNothing() ? MayBe.of(null) : MayBe.of(fn(this._value))
//     }
//     isNothing() {
//         return this._value === null || this._value === undefined
//     }
// }

// let r = MayBe.of(undefined).map(x => x.toUpperCase())
// console.log(r)

// Either 函子

// class Left {
//     static of (value) {
//         return new Left(value)
//     }
//     constructor(value) {
//         this._value = value
//     }
//     map(fn) {
//         return this
//     }
// }

// class Right {
//     static of (value) {
//         return new Right(value)
//     }
//     constructor(value) {
//         this._value = value
//     }
//     map(fn) {
//         return Right.of(fn(this._value))
//     }
// }

// let r1 = Right.of(12).map(x => x + 2)
// let r2 = Left.of(12).map(x => x + 2)

// console.log(r1)
// console.log(r2)

// function parseJSON(str) {
//     try {
//         return Right.of(JSON.parse(str))
//     } catch (error) {
//         return Left.of({
//             error: error.message
//         })

//     }
// }
// let r = parseJSON('{"name":zs}')
// let r = parseJSON('{"name":"zs"}').map(x=>x.name.toUpperCase())
// console.log(r)


// IO 函子

const fp = require('lodash/fp')

// class IO {
//     static of (value) {
//         return new IO(function () {
//             return value
//         })
//     }
//     constructor(fn) {
//         this._value = fn
//     }
//     map(fn) {
//         return new IO(fp.flowRight(fn, this._value))
//     }
// }

// let r = IO.of(process).map(p => p.execPath)
// console.log(r)
// console.log(r._value())

// folktale 中的 compose、curry
// const {
//     compose,
//     curry
// } = require('folktale/core/lambda')

// const {
//     toUpper,
//     first
// } = require('lodash/fp')

// let f = curry(2, (x, y) => {
//     return x + y
// })
// console.log(f(1, 2))
// console.log(f(1)(2))

// let f=compose(toUpper,first)
// console.log(f(['one','two']))


// foktale Task 处理异步任务
const fs = require('fs')
// const {
//     task
// } = require('folktale/concurrency/task')
// const {
//     split,
//     find
// } = require('lodash/fp')

// function readFile(filename) {
//     return task(resolver => {
//         fs.readFile(filename, 'utf-8', (err, data) => {
//             if (err) resolver.reject(err)
//             resolver.resolve(data)
//         })
//     })
// }

// readFile('../../package.json')
//     .map(split('\n'))
//     .map(find(x => x.includes('version'))).run().listen({
//     onRejected: err => {
//         console.log(err)
//     },
//     onResolved: value => {
//         console.log(value)
//     }
// })


// Poionted函子

// class Container {
//     static of (value) {
//         return new Container(value)
//     }
// }


// IO函子的问题
class IO {
    static of (value) {
        return new IO(function () {
            return value
        })
    }
    constructor(fn) {
        this._value = fn
    }
    map(fn) {
        return new IO(fp.flowRight(fn, this._value))
    }
    join(){
        return this._value()
    }
    flatMap(fn){
        return this.map(fn).join()
    }
}

let readFile = function (filename) {
    return new IO(function () {
        return fs.readFileSync(filename, 'utf-8')
    })
}

let print = function (x) {
    return new IO(function () {
        console.log(x)
        return x
    })
}

// let cat=fp.flowRight(print,readFile)

// let r=cat('../../package.json')._value()._value()
// console.log(r)
let r=readFile('../../package.json')
// .map(x=>x.toUpperCase())
.map(fp.toUpper)
.flatMap(print).join()
console.log(r)