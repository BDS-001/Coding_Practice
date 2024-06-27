/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if (n === 1) return true
    if (n % 2 != 0) return false

    let total = 2
    while (total <= n) {
        if (total === n) return true
        total *= 2
    }
    return false
};

var isPowerOfTwo2 = function(n) {
    if (n === 0) return false

    while (n !== 1) {
        if (n%2 != 0) return false
        n /= 2
    }
    return true
};