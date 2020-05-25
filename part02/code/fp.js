// 高阶函数-函数作为参数

// function forEach(array, fn) {
//     for (let i = 0; i < array.length; i++) {
//         fn(array[i])
//     }
// }

// 测试
// let arr = [1, 3, 4, 7, 8]
// forEach(arr, function (item) {
//     console.log(item)
// })


// function filter(arr, fn) {
//     let results = []
//     for (let i = 0; i < arr.length; i++) {
//         if (fn(arr[i])) {
//             results.push(arr[i])
//         }
//     }
//     return results
// }

// 测试
// let arr = [1, 3, 4, 7, 8]

// let r = filter(arr, function (item) {
//     return item % 2 === 0
// })
// console.log(r)

// 函数作为返回值

// function makeFn(){
//     let msg='Hello function'
//     return function(){
//         console.log(msg)
//     }
// }

// const fn=makeFn()
// fn()

// makeFn()()


// once

// function once(fn) {
//     let done = false;
//     return function () {
//         if (!done) {
//             done = true;
//             return fn.apply(this, arguments)
//         }
//     }
// }

// let pay = once(function (money) {
//     console.log(`支付：${money} RMB`)
// })
// pay(5)
// pay(5)
// pay(5)
// pay(5)

// map

// const map = (arr, fn) => {
//     let result = []
//     for (let value of arr) {
//         result.push(fn(value))
//     }
//     return result
// }

// let arr = [1, 2, 3, 4]

// let array = map(arr, item => item * item)
// console.log(array)

// every

// const every = (array, fn) => {
//     let result = true
//     for (let value of array) {
//         result = fn(value)
//         if (!result) {
//             break
//         }
//     }
//     return result
// }

// let arr = [2, 3, 4, 6, 11]

// let result = every(arr, i => i < 10)
// console.log(result)

// some

// const some = function (arr, fn) {
//     let result = false;
//     for (let value of arr) {
//         result = fn(value)
//         if (result) {
//             break
//         }
//     }
//     return result
// }

// let arr = [3, 3, 1, 11]

// let result = some(arr, i => i % 2 == 0)
// console.log(result)

// function makePower(power){
//     return function(number){
//         return Math.pow(number,power)
//     }
// }

// let power2=makePower(2)
// let power3=makePower(3)

// console.log(power2(4))
// console.log(power2(5))
// console.log(power3(4))

// function makeSalary(base) {
//     return function (performance) {
//         return base + performance
//     }
// }

// let salaryLevel1=makeSalary(12000)
// let salaryLevel2=makeSalary(15000)

// console.log(salaryLevel1(2000))
// console.log(salaryLevel2(2000))


// 纯函数和不纯函数   slice/splice

// let array = [1, 2, 3, 4, 5]
// // 纯函数
// console.log(array.slice(0, 3))
// console.log(array.slice(0, 3))
// console.log(array.slice(0, 3))
// // 不纯
// console.log(array.splice(0, 3))
// console.log(array.splice(0, 3))
// console.log(array.splice(0, 3))

// // 纯函数

// function getSum(a, b) {
//     return a + b
// }
// console.log(getSum(1,2))
// console.log(getSum(1,2))
// console.log(getSum(1,2))

// loadsh first / last / toUpper / reserve / each / includes / find / findIndex

const _ = require('lodash')

// const array = ['jack', 'tom', 'lucy', 'kate']

// console.log(_.first(array))
// console.log(_.last(array))
// console.log(_.toUpper(_.last(array)))
// console.log(_.reverse(array))
// const r = _.each(array, (item, index) => {
//     console.log(item, index)
// })
// console.log(r)

// 记忆函数

function getArea(r) {
  console.log(r)
  return Math.PI * r * r
}

// let getAreaWithMemory = _.memoize(getArea)
// console.log(getAreaWithMemory(4))
// console.log(getAreaWithMemory(4))
// console.log(getAreaWithMemory(4))


// 模拟memozi方法的实现

// function memoize(f) {
//     let cache = {}
//     return function () {
//         let key = JSON.stringify(arguments)
//         cache[key] = cache[key] || f.apply(f, arguments)
//         return cache[key]
//     }
// }

// let getAreaWithMemory = memoize(getArea)
// getAreaWithMemory(4)
// getAreaWithMemory(4)
// getAreaWithMemory(5)


// 柯力化

// let checkAge = min => (age => age >= min)

// let checkAge18=checkAge(18)
// let checkAge20=checkAge(20)

// console.log(checkAge18(12))
// console.log(checkAge20(20))

// lodash中的柯力化函数 _.curry()

// function getSum(a, b, c) {
//   return a + b + c
// }

// const curried=curry(getSum)

// console.log(curried(1,2)(3))
// console.log(curried(1)(2,3))

// 柯力化案例

// ''.match(/s+/g)
// ''.match(/d+/g)



// const match = _.curry(function match(reg, str) {
//   return str.match(reg)
// })

// const haveSpace = match(/\s+/g)
// const haveNumber = match(/\d+/g)
// console.log(haveSpace('hello world'))
// console.log(haveNumber('1b2c'))

// const filter = _.curry(function (func, arr) {
//   return arr.filter(func)
// })

// console.log(filter(haveSpace,['join hello','join','hello world']))

// const findSpace=filter(haveSpace)

// console.log(findSpace(['join hello','join','hello world']))


// lodash curry 实现原理

// function curry(func) {
//   return function curriedFn(...args) {
//     // 判断实参和形参的格式
//     if (args.length < func.length) {
//       return function () {
//         return curriedFn(...args.concat(Array.from(arguments)))
//       }
//     }
//     return func(...args)
//   }
// }


// 函数组合

// function compose(f, g) {
//   return function (value) {
//     return f(g(value))
//   }
// }

// function reverse(arr) {
//   return arr.reverse()
// }

// function first(arr) {
//   return arr[0]
// }

// const last = compose(first, reverse);
// console.log(last([1,2,3,4,5]))


// lodash 中的函数组合的方法 _.flowRight()


// const reverse = arr => arr.reverse()

// const first = arr => arr[0]

// const toUpper = s => s.toUpperCase()

// const compose = (...args) => value => args.reverse().reduce((acc, fn) => fn(acc), value)
// const f = compose(toUpper, first, reverse)
// const f = _.flowRight(toUpper, first, reverse)

// const f = _.flowRight(_.toUpper, _.first, _.reverse)
const f = _.flowRight(_.toUpper, _.first, _.reverse)

console.log(f(['one', 'two', 'three', 'four']))

// function compose(...args) {
//   return function (value) {
//     return args.reverse().reduce(function (acc, fn) {
//       return fn(acc)
//     }, value)
//   }
// }