class Solution {
    constructor() {
        this.cache
        this.count=0
    }
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s) {
        this.initialize(s, s.length)
        for (let diff = 2; diff < s.length; diff++) {
            for (let i = 0; i + diff < s.length; i++) {
                const j = i + diff
                if (s[i] === s[j] && this.cache[i+1][j-1]) {
                    this.cache[i][j] = true
                    this.count++
                    continue
                }
                this.cache[i][j] = false
            }
        }
        return this.count
    }

    initialize(s, length) {
        this.cache = Array.from({length}, () => Array(length))
        for (let i = 0; i < length; i++) {
            this.cache[i][i] = true
            this.count++
            if (i + 1 < length) {
                const res = s[i] === s[i+1]
                this.cache[i][i+1] = res
                if (res) this.count++
            }
        }
    }
}