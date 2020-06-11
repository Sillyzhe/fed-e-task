// if (true) {
//   // var foo = "wlz"
//   let foo="wlz"
// }
// console.log(foo)

// ---------------------------

// for (let i = 0; i < 3; i++) {
//   for (let i = 0; i < 3; i++) {
//     console.log(i)
//   }
//   console.log('内层结束 i =', i)
// }


// ------------
// var elements = [{}, {}, {}]
// for (let i = 0; i < elements.length; i++) {
//   elements[i].onclick = function () {
//     // return function () {
//       console.log(i)
//     }
//   // })(i)
// }
// elements[2].onclick()



// ---------------

// for (let i = 0; i < 3; i++) {
//   let i = 'foo'
//   console.log(i)
// }


// ------------


// var num = 20;
// const obj = {
//   num: 10,
//   func: (num) => {
//     this.num += 5;
//     console.log(this.num);

//     num += 5;
//     console.log(num);
//     var num = 30;

//     return function () {
//       this.num += 4;
//       console.log(this.num);

//       num += 10;
//       console.log(num)
//     }
//   }
// }

// obj.func(40)();


// const message='ERROR:foo is not defined.';

// console.log(message.endsWith('defined.'))

// console.log(0===-0)

// Object.is(+0,-0)

// --------------

// Proxy

// const person = {
//     name: 'wlz',
//     age: 25
// }

// const personProxy = new Proxy(person, {
//     deleteProperty(target,property){
//         console.log('delete',property)
//         delete target[property]
//     },
//     get(target, property) {
//         // console.log(target,property)
//         // return 100
//         return property in target ? target[property] : 'defalut'
//     },
//     set(target,property,value) {
//         console.log(target,property,value)
//     }
// })
// // personProxy.age=1
// // console.log(personProxy.name)
// // console.log(personProxy.xx)

// delete personProxy.age
// console.log(person)

// -------------
// Reflect对象

// const obj={
//     foo:'123',
//     bar:'456'
// }

// const proxy=new Proxy(obj,{
//     get(target,property){
//         console.log('watch logic~')

//         return Reflect.get(target,property)
//     }
// })

// console.log(proxy.foo)


// ---------
// class

// class Person{
//     constructor(name){
//         this.name=name
//     }
//     say(){
//         console.log(`hi,my name is ${this.name}`)
//     }

// }

// class Student extends Person{
//     constructor(name,number){
//         super(name)
//         this.number=number
//     }
//     hello(){
//         super.say();
//         console.log(`my school number is ${this.number}`)
//     }
// }

// var xm=new Student('silly',25)
// xm.hello()




// -----------------
// Set数据结构


// const s = new Set()

// s.add(1).add(2).add(3).add(2)
// console.log(s)
// s.forEach(i => console.log(i))
// for(let i of s){
//     console.log(i)
// }


// const arr=[1,2,3,2,1,5]

// const result=Array.from(new Set(arr))

// console.log(result)

// -------------
// Map数据结构

// const m = new Map();

// const tom = {
//     name: 'tom'
// }

// m.set(tom, 80)

// console.log(m)

// console.log(m.get(tom))

// m.forEach((value, key) => {
//     console.log('key', key, 'value', value)
// })


// -------------
// Symbol 

// const obj={
//     [Symbol()]:'symbol value',
//     foo:'normal value'
// };

// for (var key in obj){
//     console.log(key)
// }

// console.log(Object.keys(obj))
// console.log(JSON.stringify(obj))
// console.log(Object.getOwnPropertySymbols(obj))

// ------------------
// for...of...循环

// const arr = [100, 200, 300]

// for (const item of arr) {
//     console.log(item)
//     if (item > 100) {
//         break
//     }
// }


// const set = new Set(['foo', 'bar', 'baz'])
// const iterator = set[Symbol.iterator]()

// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())


// const obj = {
//     store: ['foo', 'bar', 'baz'],
//     [Symbol.iterator]: function () {
//         let index = 0;
//         const self = this;
//         return {
//             next: function () {
//                 const result = {
//                     value: self.store[index],
//                     done:index>=self.store.length
//                 }
//                 index++
//                 return result
//             }
//         }
//     }
// }

// for (const item of obj) {
//     console.log(item)
//     console.log('循环体')
// }

// 迭代器模式 对外提供统一遍历接口

// const todos = {
//     life: ['吃饭', '睡觉', '打豆豆'],
//     learn: ['语文', '数学', '外语'],
//     work: ['喝茶'],
//     each: function (callback) {
//         const all = [].concat(this.life, this.learn, this.work)
//         for (const item of all) {
//             callback(item)
//         }
//     },
//     [Symbol.iterator]: function () {
//         const all = [...this.life, ...this.learn, ...this.work];
//         let index = 0;
//         return {
//             next: function () {
//                 return {
//                     value: all[index],
//                     done: index++ >= all.length
//                 }
//             }
//         }
//     }
// }
// todos.each((item) => {
//     console.log(item)
// })
// console.log('----------')

// for(const item of todos){
//     console.log(item)
// }



// -------------------
// 生成器函数

// function* foo() {
//     console.log('zce')
//     return 100
// }
// const result = foo()
// console.log(result.next())


// function* foo(){
//     console.log('111111')
//     yield 100
//     console.log('22222222')
//     yield 200
//     console.log('3333')
//     yield 300
// }
// const generator=foo()
// console.log(generator.next())
// console.log(generator.next())
// console.log(generator.next())
// console.log(generator.next())


// 生成器应用

// function* createIdMaker() {
//     let id = 1
//     while (true) {
//         yield id++
//     }
// }
// const idMaker=createIdMaker()
// console.log(idMaker.next().value)





// const todos = {
//     life: ['吃饭', '睡觉', '打豆豆'],
//     learn: ['语文', '数学', '外语'],
//     work: ['喝茶'],
//     each: function (callback) {
//         const all = [].concat(this.life, this.learn, this.work)
//         for (const item of all) {
//             callback(item)
//         }
//     },
//     [Symbol.iterator]: function* () {
//         const all = [...this.life, ...this.learn, ...this.work];
//         for (const item of all) {
//             yield item
//         }
//     }
// }

// for (const item of todos){
//     console.log(item)
// }


// -----------------
// ES2016

// const arr = ['foo', 1, NaN, false]

// console.log(arr.indexOf('foo'))
// console.log(arr.indexOf(NaN))

// console.log(arr.includes('foo'))
// console.log(arr.includes(NaN))

// console.log(Math.pow(2, 10))

// console.log(2 ** 10)

// ------------------
// ES2017
// Object.entries

// const  obj={
//     foo:'value1',
//     bar:'value2'
// }

// console.log(Object.values(obj))

// console.log(Object.entries(obj))
// for (const [key,value] of Object.entries(obj)){
//     console.log(key,value)
// }

// console.log(new Map(Object.entries(obj)))

// Object.getOwnPropertyDescriptors

// const p1 = {
//     firstName: 'li',
//     lastName: 'zhe',
//     get fullName() {
//         return this.firstName + ' ' + this.lastName
//     }
// }

// console.log(p1.fullName)

// const p2=Object.assign({},p1);
// p2.firstName='silly'
// console.log(p2)

// const descriptors = Object.getOwnPropertyDescriptors(p1)
// console.log(descriptors)

// const p2 = Object.defineProperties({}, descriptors);
// p2.firstName = 'silly';
// console.log(p2.fullName)


// String.prototype.padStart/String.prototype.padEnd

const books = {
    html: 5,
    css: 16,
    javascript: 128
}

for (const [name, count] of Object.entries(books)) {
    console.log(name, count)
}
for (const [name, count] of Object.entries(books)) {
    console.log(`${name.padEnd(16,'-')}|${count.toString().padStart(3,'0')}`)
}