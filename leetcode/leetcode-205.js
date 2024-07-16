/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    const map = new Map
    const used = new Map
    for (let i = 0; i < s.length; i++) {
        if (!map.has(s[i])) {
            if (used.has(t[i])) {
                return false;
            }
            map.set(s[i], t[i])
            used.set(t[i], true)
        } else {
            if (map.get(s[i]) != t[i]) return false
        }
    }
    return true
};