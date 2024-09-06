class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let nums = []
        for (let i = 0; i < tokens.length; i++) {
            let val = parseInt(tokens[i])
            if (val || val === 0) {
                nums.push(val)
                continue
            }

            val = tokens[i]
            const num1 = nums.pop()
            const num2 = nums.pop()
            if (val === '+') {
                nums.push(num2 + num1)
            } else if (val === '-') {
                nums.push(num2 - num1)
            } else if (val === '/') {
                nums.push(parseInt(num2 / num1))
            } else if (val === '*') {
                nums.push(num2 * num1)
            }

        }

        return nums.pop()
    }
}
