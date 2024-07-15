/**
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function(n) {
    let max = (n * (n + 1) / 2)

    let left = 0
    for (let i = 1; i <= n; i++) {
        left += i
        let right = max - left
        console.log(left, right)
        if (left === right + i) return i
    }
    return -1
};