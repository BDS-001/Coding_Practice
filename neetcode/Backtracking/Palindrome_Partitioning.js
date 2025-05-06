class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     */
    partition(s) {
        const res = []
        const backtrack = (string) => {
            if (!string || string.length < 1) return
            if (string === string.split('').reverse().join('')) res.push([string])
            if (string.length === 1) return
            for (let i = 1; i < string.length; i++) {
                backtrack(string.substring(0,i))
                backtrack(string.substring(i))
            }
        }
        backtrack(s)
        return res
    }
}
