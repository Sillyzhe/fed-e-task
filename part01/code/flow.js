/* @flow */

// function sum(a: number, b: number) {
//   return a + b
// }

// sum(100, 100)
// // sum('100','100')


// function square(n: number) {
//   return n * n
// }
// square(1)

// let num: number = 100;
// num = 'start'


// function foo(): void {

// }

// 原始类型

// const a: string = 'foobar'

// const b: number = 100 // NaN Infinity 100

// const c: boolean = false //true

// const d: null = null

// const e: void = undefined

// const f:symbol=Symbol()

// 数组类型

// const arr1: Array < number >= [1, 2, 3]

// const arr2: number[] = [1, 2]

// 元组
// const foo: [string, number] = ['foo', 123]


// 对象类型

// const obj1: {
//   foo: string,
//   bar: number
// } = {
//   'foo': 'foo',
//   'bar': 1
// }

// const obj2: {
//   foo ? : string,
//   bar: number
// } = {
//   'bar': 1
// }


// const obj3: {
//   [string]: string
// } = {}


// 函数类型


// function foo(callback: (string, number) => void) {
//   callback('string', 100)
// }

// foo(function (string, number) {

// })


// 特殊类型


// 字面量

const a: 'foo' = 'foo'

const type: 'success' | 'warning' | 'danger' = 'success'

const b: string | number = 'string'

type StringOrNumber = string | number

const c: StringOrNumber = 'string' //100

// ------------

const gender: ? number = null


// Mixed any
function passMixed(value: mixed) {
  if (typeof value === 'string') {
    value.substr(1)

  }
  if (typeof value === 'number') {
    value * value
  }
}

passMixed('string')
passMixed(100)


function passAny(value: any) {
  value.substr(1)

  value * value
}