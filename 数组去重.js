let arr = [1, 1, 4, 50, 50, 6, 2, 2]
let res1 = Array.from(new Set(arr));
console.log('res1:', res1)

let res2 = arr.filter((item, index) => {
    return arr.indexOf(item) == index
})
console.log('res2', res2)

let res3 = []
arr.forEach(element => {
    if (!res3.includes(element)) {
        res3.push(element)
    }
})
console.log('res3:', res3)

const tem = new Map();
let res4 = arr.filter((item) => !tem.has(item) && tem.set(item, 1))
console.log('res4:', res4)

// 数组最大最小值
// ES5
console.log(Math.min.apply(null, arr))
//ES6
console.log(Math.max(...arr))

let num = 12345678
console.log(num.toLocaleString())


