class Solution {
    constructor() {
        this.strArr = []
    }
    /**
     * @param {string} s
     * @return {number}
     */
    numDecodings(s) {
        if (!this.process(s)) return 0
    }

    process(s) {
        if (s[0] === '0' || s.includes('00')) return false

        let arr = s.split('')
        while (arr.length > 0) {
            const last = arr.pop()
            if (last === '0') {
                const prev = arr.pop()
                if (Number(prev + last) > 26) return false
                this.strArr.unshift(prev + last)
            } else {
                this.strArr.unshift(last)
            }
        }

        return true
    }
}

//fail s="1123"