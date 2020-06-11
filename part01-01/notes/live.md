# 回顾&补充

## Promise相关
- Promise应用
- 执行流程（宏任务/微任务）
  - 每一个任务的执行过程都有可能产生宏任务和微任务
  - 每个任务执行的最后，需要先执行所有的微任务，再开始执行宏任务
- Generator/async/Asait
- Promise.all()失败问题
  - 如果数组中任意一个任务失败就会导致整个任务失败
  - 对数组中的每一个promise都去处理一下catch，确保不会出现异常
  - 也可以使用Promise.allSettled()实现——ES2020

npx——当前可执行程序
 
## 关于this

- this 的指向，取决于调用。沿着作用域向上找最近的一个function，看这个function最终是怎样执行的。


```
function foo(){
  console.log(this)
}
```
```
1. 普通调用
   foo() 全局对象，严格模式undefined
2. new调用
  new foo() 空对象 foo{}

3. call/apply/bind
foo.call('123) 自己指定 123
```
## ES2018+

- ES2018
  - 展开和剩余在对象上的应用
  - 正则表达式的增强
  - Promise.prototype.finally()
- ES2019
  - 数组稳定排序
  - try...catch参数可以省略
- ES2020
  - 控制合并运算符
  - 可选链运算符
  - Promise.allSettled()
  - BigInt
  - 动态导入
  
  关于应用

  TypeScript

  现阶段的目标是掌握语法层面和运行层面的特性，应用落地