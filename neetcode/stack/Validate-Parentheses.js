class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const map = {
            ']': '[',
            '}': '{',
            ')': '('
        }

        const stack = []
        for (let i = 0; i < s.length; i++) {
            if (!map[s[i]]) {
                stack.unshift(s[i])
            } else {
                const par = stack.shift()
                if (par != map[s[i]]) return false
            }
        }
        return stack.length > 0 ? false : true
    }
}
