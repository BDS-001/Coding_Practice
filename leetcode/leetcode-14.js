/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length === 1 || strs[0].length === 0) return strs[0]
    let end = strs[0].length

    while (true) {
        const prefix = strs[0].slice(0, end)
        console.log(prefix, strs.every(str => str.startsWith(prefix)))


        if (strs.every(str => str.startsWith(prefix))) {
            return prefix
        } else {
            end -= 1
        }

        if (end < 1) return ''
    }
};