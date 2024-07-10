/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    let depth = 0
    let max = 0

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            depth += 1
            max = Math.max(max, depth)
        }
        if (s[i] === ')') depth -= 1
    }
    return max
};