// 冒泡排序
// 第一轮循坏n-1次，因为自己不需要和自己比
// 第二轮循环需要减掉已经排好的，第一轮排好0个，第二轮排好一个
let arr = [5, 2, 3, 1, 4];
function bubbleSort(arr) {
    let arrLen = arr.length
    for (let i = 0; i < arrLen - 1; i++) {
        for (let j = 0; j < arrLen - i - 1; j++) {
            let tempJ = arr[j];
            let tempJ2 = arr[j + 1];
            if (tempJ > tempJ2) {
                arr[j + 1] = tempJ;
                arr[j] = tempJ2
            }
        }
    }
    return arr;
}

console.log(bubbleSort(arr))



