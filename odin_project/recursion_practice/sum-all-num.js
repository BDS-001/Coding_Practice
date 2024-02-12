function sumRange(num) {
    if (num === 1) return num
    return num + sumRange(num - 1)
}

console.log(sumRange(3))
console.log(sumRange(4))