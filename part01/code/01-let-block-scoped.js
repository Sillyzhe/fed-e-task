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


const message='ERROR:foo is not defined.';

console.log(message.endsWith('defined.'))