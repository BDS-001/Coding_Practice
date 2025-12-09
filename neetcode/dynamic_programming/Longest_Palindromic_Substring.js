class Solution {

    constructor() {
        this.s = ''
        this.max = ''
    }
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {
        if (this.checkPalindrome(s)) return s
        this.s = s
        this.search()
        return this.max
    }

    search() {
        for (let start = 0; start < this.s.length; start++) {
            let end = this.s.length

            while(end > start && end - start > this.max.length) {
                const sub = this.s.slice(start, end)
                if (this.checkPalindrome(sub)) {
                    if(this.max.length < sub.length) this.max = sub
                    break 
                }
                end--
            }
        }
    }

    checkPalindrome(substring) {
        return substring === [...substring].reverse().join('')
    }
}

class Solution2 {

    constructor() {
        this.max = {diff: 0, pos:[0,0]}
    }
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {
        if (s.length < 2) return s
        this.initialize(s, s.length)
        for (let diff = 2; diff < s.length; diff++) {
            for (let i = 0; i + diff < s.length; i++) {
                const j = i + diff
                if (s[i] === s[j] && this.cache[i+1][j-1]) {
                    this.cache[i][j] = true
                    if (diff > this.max.diff) this.max = {diff, pos:[i, j]}
                    continue
                }
                this.cache[i][j] = false
            }
        }
        return s.slice(this.max.pos[0], this.max.pos[1] + 1)
    }

    initialize(s, length) {
        this.cache = Array.from({length}, () => Array(length))
        for (let i = 0; i < length; i++) {
            this.cache[i][i] = true
            if (i + 1 < length) {
                const res = s[i] === s[i+1]
                this.cache[i][i+1] = res
                if (this.max.diff < 1 && res) this.max = {diff: 1, pos:[i, i+1]}
            }
        }
    }
}