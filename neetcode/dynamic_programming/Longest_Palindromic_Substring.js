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
        this.s = s
        this.search()
        return this.max
    }

    search(i = 0, substring = '') {
        if (i >= this.s.length) return
        const newString = substring + this.s[i]
        if (this.checkPalindrome(newString) && this.max.length < newString.length) this.max = newString
        this.search(i + 1, substring)
        this.search(i + 1, newString)
    }

    checkPalindrome(substring) {
        return substring === [...substring].reverse().join('')
    }
}

console.log(new Solution().longestPalindrome("aacabdkacaa"))