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