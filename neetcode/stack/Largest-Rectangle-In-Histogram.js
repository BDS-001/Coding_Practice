class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        let stack = []
        let max = null
        for (let i = 0; i < heights.length; i++) {
            while(stack.length > 0 || stack.height > heights[i]) {
                const current = stack.shift()
                max = Math.max(max, current.height * (i - current.i))
            }
            stack.unshift({height: heights[i], i: i})
            
        }
        
        console.log(stack[0].height * (stack[0].i - stack[stack.length - 1].i + 1), stack[0].height, stack[0].i, stack)
        return stack.length === 0 ? max : Math.max(max, stack[0].height * (stack[0].i - stack[stack.length - 1].i + 1))
    }
}