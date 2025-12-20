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
        return this.count()
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

    count(i=0) {
        if (i >= this.strArr.length - 1) return 1
        return (Number(this.strArr[i] + this.strArr[i+1]) <= 26) ? this.count(i+1) + this.count(i+2) : this.count(i+1)
    }
}

//fail s="1123"