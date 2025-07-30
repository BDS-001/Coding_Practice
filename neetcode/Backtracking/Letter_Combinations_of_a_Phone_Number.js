class Solution {
    static phoneKeypad = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz'
    };

    constructor() {
        this.res = []
    }

    /**
     * @param {string} digits
     * @return {string[]}
     */
    letterCombinations(digits) {
        if (!digits.length > 0) return this.res
        this.backtrackRes(digits)
        return this.res
    }

    backtrackRes(digits, curr = '') {
        if (digits.length < 1) {
            this.res.push(curr)
            return
        }

        const letters = Solution.phoneKeypad[digits[0]]
        for (let i = 0; i < letters.length; i++) {
            this.backtrackRes(digits.slice(1), curr + letters[i])
        }
        return
    }
}
