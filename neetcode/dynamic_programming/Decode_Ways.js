class Solution {
    constructor() {
        this.strArr = []
    }
    /**
     * @param {string} s
     * @return {number}
     */
    numDecodings(s) {
        if (!this.valid(s)) return 0
        this.process(s)
    }

    valid(s) {
        if (s[0] === '0' || s.includes('00')) return false

        for (let i = 0; i < s.length; i++) {
            if (s[i] !== '0') continue
            if (Number(s[i-1] + s[i]) > 26) return false
        }

        return true
    }

    process(s) {
        let arr = s.split('')
        while (arr.length > 0) {
            const last = arr.pop()
            const num = last === '0' ? arr.pop() + last : last
            this.strArr.unshift(num)
        }
    }
}

//fail s="1123"