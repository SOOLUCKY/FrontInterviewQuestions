// var promise = new Promise((resolve, reject) => {
//     if (true) {
//         resolve(value)
//     } else {
//         reject(value)
//     }
// })

// promise.then(function (value) {
//     // success
//     console.log('success')
// }, function (value) {
//     // failure
//     console.log('failure')
// })

/* 以下代码会输出什么 */
localStorage.setItem('show',false);
console.log(localStorage.show || '显示')

