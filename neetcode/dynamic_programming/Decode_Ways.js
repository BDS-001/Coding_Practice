class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    numDecodings(s) {
        if (!s || s[0] === '0' || s.includes('00')) return 0

        const paired = new Set()

        for (let i = 0; i < s.length; i++) {
            if (s[i] === '0') {
                if (i === 0 || s[i-1] === '0' || Number(s[i-1] + s[i]) > 26) return 0
                paired.add(i-1)
                paired.add(i)
            }
        }

        let count = 1
        for (let i = 0; i < s.length - 1; i++) {
            if (s[i] === '0' || s[i+1] === '0') continue
            if (paired.has(i) || paired.has(i+1)) continue
            if (Number(s[i] + s[i+1]) <= 26) count++
        }

        return count
    }
}

//fail s="1123"