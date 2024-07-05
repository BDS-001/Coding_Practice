/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    let map = {}
    for (let i = 0; i < s.length; i++) {
        map[s[i]] ? map[s[i]] += 1 : map[s[i]] = 1
    }
    const vals = Object.entries(map)
    vals.sort(([, valueA], [, valueB]) => valueB - valueA)

    let res = ''
    for (let i = 0; i < vals.length; i++) {
        res += vals[i][0].repeat(vals[i][1])
    }
    return res
};