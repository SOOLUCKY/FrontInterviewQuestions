let str = 'abc'
function reverse(str) {
    let arr = str.split('')
    let tem = []
    for (let index = arr.length - 1; index >= 0; index--) {
        const element = arr[index];
        tem.push(element)
    }

    return tem.join('')
}

let s = reverse(str)
console.log(s)