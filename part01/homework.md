### 第一题

最终执行结果是10

变量i使用var声明，为全局变量。每次循环，i的值都会变化。console.log(i)里面的i指向的是全局的i。所有数a里的i指向的都是同一个i，运行是输出的是最后一轮i的值，为10


解决方法
闭包或let声明块级作用域

### 第二题

ReferenceError

使用let命令声明变量之前，该变量都不可用（暂时性死区）


### 第三题

```
    var arr=[12,34,32,89,4]
    var minNum=Math.min(...arr);
```


### 第四题 

- var
    - 使用var声明存在变量提升的情况
    - 声明后的变量会挂载在window上
    - 可以重复声明

- let
  - 块级作用域
  - 暂时性死区
  - 不能重复声明
  - 不存在变量提升
  - 声明后的数据均可以修改


- const
  - 块级作用域
  - 暂时性死区
  - 不能重复声明
  - 不存在变量提升
  - 声明后的简单类型不可以修改，复杂数据类型可以修改属性


### 第五题

执行结果是20

obj的fn函数里的setTimeout()使用了箭头函数，导致this没有指向fn的作用域，而是指向了obj的作用域

### 第六题

Symbol定义了一个独一无二的值（原始类型，不可修改）

### 第七题

浅拷贝是只拷贝了引用类型的指针，修改后原拷贝元素的值也被修改

深拷贝是拷贝了一个完全不同的对象，修改后不会影响被拷贝元素


### 第八题

JavaScript语言的执行环境是“单线程”。“异步模式”下每个任务有一个或多个回调函数，前一个任务结束后，不是执行后一个任务，而是执行回调函数。

Event Loop（是一个程序结构，用于等待和发送消息和事件）,用于处理主线程外的非阻塞事件。
分为三部分：主线程、宏队列（macrotask）、微队列（microtask）

#### 主线程
script标签里面包含的内容，或者当前作用域直接执行的内容（方法、new出来的对象）
#### 宏队列（macrotask）
setTimeout、setInterval、setImmediate、I/O、UI rendering

#### 微队列（microtask）
promise.then、process.nextTick

#### 执行顺序
1. 先执行主线程
2. 遇到宏队列（macrotask）放到宏队列（macrotask）
3. 遇到微队列（microtask）放到微队列（microtask）
4. 主线程执行完毕
5. 执行微队列（microtask），微队列（microtask）执行完毕
6. 执行一次宏队列（macrotask）中的一个任务，执行完毕
7. 执行微队列（microtask），执行完毕
8. 依次循环。。。




### 第九题

```
  function sleep(text,duration=10){
    return new Promise(function(resolve,reject){
      setTimeout(resolve(text),duration)
    })
  }

  (async function textConcat(){
    let a=await sleep('hello,')
    let b=await sleep('lagou ')
    let c=await sleep('kaiwu')
    console.log(a+b+c)
  })()

```

### 第十题

TypeScript是JavaScript的一个超集,实现面向对象编程的方式使用JavaScript。编译后运行环境依然是JavaScript

### 第十一题

优点
- 增强了代码的可读性和可维护性
- 预编译机制，减少生产环境出现问题的情况
- 对于需要长时间维护的项目，增加对开发人员的友好度
- 迁移成本低，即使不改动代码也能正常使用

缺点
- 没有JavaScript灵活
- 小项目迁移成本高
- 引入新的概念，需要学习、理解接口（interface）、类（class）、枚举（enums）、泛型（<T>）等概念



## 项目文件说明
- code 练习代码
- notes 笔记