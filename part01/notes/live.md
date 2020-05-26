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

## 关于this

- this 指向什么取决