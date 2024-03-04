/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let longestPref = ''
    let start = 0
    let end = 1

    while (true) {
        const temp = strs[0].slice(start, end)

        if (strs.every(str => str.includes(temp))) {
            if (temp.length > longestPref.length) longestPref = temp;
            end += 1
        } else {
            start += 1
            if (start === end) end += 1
            if (end === strs[0].length + 1) break
        }
    }
};

