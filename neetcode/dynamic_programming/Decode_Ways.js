class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    numDecodings(s) {
        if (!s || s[0] === '0' || s.includes('00') || !this.validBase(s)) return 0
        let count = 1
        for (let i = 0; i < s.length - 1; i++) {
            if (s[i+1] === '0' || s[i] === '0') continue
            if (Number(s[i] + s[i+1]) <= 26) count++
        }
        return count
    }

    validBase(s) {
        for (let i = 0; i < s.length; i++) {
            if (s[i] !== '0') continue
            if (Number(s[i-1] + s[i]) > 26) return false
        }
        return true
    }
}
