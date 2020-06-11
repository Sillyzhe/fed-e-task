// 申请
// let obj = {}

// 使用

// obj.name = "lg"

// 释放
// obj = null

// JavaScript中的引用与可达

// let obj={name:'xm'}

// let ali=obj;

// obj=null;
// console.log(ali)


// 可达对象演示
// function objGroup(obj1, obj2) {
//     obj1.next = obj2;
//     obj2.prev = obj1;
//     return {
//         o1: obj1,
//         o2: obj2
//     }
// }

// let obj = objGroup({
//     name: 'obj1'
// }, {
//     name: 'obj2'
// })
// console.log(obj)


// 引用计数算法实现原理

// const user1 = {
//     age: 11
// }
// const user2 = {
//     age: 22
// }
// const user3 = {
//     age: 33
// }

// const nameList = [user1.age, user2.age, user3.age];

// function fn() {
//     const num1 = 1
//     const num2 = 2
// }

// fn()

// function fn(){
//     const obj1={}
//     const obj2={}

//     obj1.name=obj2
//     obj2.name=obj1

//     return 'lg is a coder'
// }

// fn()


// 常见GC算法总结