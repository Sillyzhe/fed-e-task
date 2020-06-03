// 同步模式

// console.log('global begin')

// function bar() {
//     console.log('bar task')
// }

// function foo() {
//     console.log('foo task')
//     bar()
// }

// foo()

// console.log('global end')

// 异步模式

// console.log('global begin')

// setTimeout(function timer1() {
//     console.log('timer1 invoke')
// }, 1800);

// setTimeout(function timer2() {
//     console.log('timer2 invoke')
//     setTimeout(function inner() {
//         console.log('inner invoke')
//     }, 1000);
// }, 1000)


// console.log('global end')


// Promise
// const promise = new Promise((resolve, reject) => {
//     // resolve(100)
//     reject(new Error('promise rejected'))
// })
// promise.then(res => {
//     console.log('resolve', res)
// },err => {
//     console.log('reject', err)
// })
// console.log('end')


function ajax(url) {
  return new Promise((resolve, reject) => {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url)
    xhr.responseType = 'json'
    xhr.onload = function () {
      if (this.status === 200) {
        resolve(this.response)
      } else {
        reject(new Error(this.statusText))
      }
    }
    xhr.send()
  })
}
// ajax('./user.json').then(res=>{
//     console.log(res)
// }).catch(err=>{
//     console.log(err)
// })

function* foo() {
  console.log('start')
  yield 'foo';

}

const generator = foo()

console.log(generator.next())

const debounce = (func, wait = 0) => {
  let timeout = null;
  let args

  function debounced(...arg) {
    args = arg;
    if (timeout) {
      clearTimeout(timeout)
      timeout = null
    }
    return new Promise((resolve, reject) => {
      timeout = setTimeout(async () => {
        try {
          const result = await func.apply(this.args);
          resolve(result)
        } catch (error) {
          reject(error)
        }
      }, wait)
    })
  }
  // 允许取消
  function cancel() {
    clearTimeout(timeout)
    timeout = null
  }

  // 允许立即执行
  function flush() {
    cancel()
    return func.apply(this.args)
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced
}