// 去空格
let str = ' abd ddd'
let res = str.replace(/\s+/g, "")
console.log(res)

// 统计出现最多的字符
let str2 = 'asdasddsfdsfadsfdghdadsdfdgdasd';
function getMax(str) {
    let obj = {};
    for (let i in str) {
        if (obj[str[i]]) {
            obj[str[i]]++;
        } else {
            obj[str[i]] = 1;
        }
    }

    let num = 0;
    let number = 0;
    for (var i in obj) {
        if (obj[i] > num) {
            num = obj[i];
            number = i;
        }
    }

    console.log('最多的值是:' + number + '出现次数为：' + num)
}

getMax(str2)