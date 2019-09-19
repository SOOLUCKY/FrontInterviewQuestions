// 不借助第三者交换 a，b两个值
// a = a + b;
// b = a - b;
// a = a - b;

// a = a - b;
// b = a + b;
// a = b - a;

// a = { a: b, b: a };
// b = a.b;
// a = a.a;

// a = [a, b];
// b = a[0];
// a = b[1];

// [a, b] = [b, a];

// new的过程和实现
// function create(Con, ...args){
//     let obj = {};
//     Object.setPrototypeOf(obj, Con.prototype);
//     let result = Con.apply(obj, args);
//     return result instanceof Object ? result : obj;
// }

/**
 * eventloop 
 */

// setTimeout(()=>{
//     console.log(1) 
//  },0)
//  Promise.resolve().then(()=>{
//     console.log(2) 
//  })
//  console.log(3) 
//  3 2 1

// setTimeout(() => {
//     console.log(1)
// }, 0)
// let a = new Promise((resolve) => {
//     console.log(2)
//     resolve()
// }).then(() => {
//     console.log(3)
// }).then(() => {
//     console.log(4)
// })
// console.log(5)
// 2 5 3 4 1

// new Promise((resolve,reject)=>{
//     console.log("promise1")
//     resolve()
// }).then(()=>{
//     console.log("then11")
//     new Promise((resolve,reject)=>{
//         console.log("promise2")
//         resolve()
//     }).then(()=>{
//         console.log("then21")
//     }).then(()=>{
//         console.log("then23")
//     })
// }).then(()=>{
//     console.log("then12")
// })

async function async1() {
    console.log("async1 start");
    await  async2();
    console.log("async1 end");
}

async  function async2() {
    console.log( 'async2');
}

console.log("script start");

setTimeout(function () {
    console.log("settimeout");
},0);

async1();

new Promise(function (resolve) {
    console.log("promise1");
    resolve();
}).then(function () {
    console.log("promise2");
});
console.log('script end'); 







