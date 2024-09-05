class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(heights) {
        let left = 0
        let right = null
        let maxRain = 0

        while(left < heights.length) {
            if (heights[left] <= 0) {
                left ++;
                continue
            }

            let maxHeight = null
            let minHeight = null
            for (let i = left + 1; i < heights.length; i++) {
                maxHeight ? maxHeight = heights[i] : maxHeight = Math.max(heights[i], maxHeight)
                minHeight ? minHeight = heights[i] : minHeight = Math.min(minHeight, heights[i])
                if (heights[i] >= heights[left]) {
                    right = i
                    break
                }
            }

            if (!right && minHeight < maxHeight) {
                for (let i = left + 1; i < heights.length; i++) {
                    if (heights[i] === maxHeight) {
                        right = i
                        break
                    }
                }
            }

            if (right) {
                const height = Math.min(heights[left] , heights[right])
                console.log('hright', height, 'left', left, 'right', right)
                for (let i = left + 1; i < right; i++) {
                    maxRain += height - heights[i]
                    
                }
                left = right
                right = null
            } else {
                left++;
            }
        }
        return maxRain
    }
}

const test1 = new Solution().trap([0,1,0,2,1,0,1,3,2,1,2,1])
const test2 = new Solution().trap([4,2,0,3,2,5])
console.log(test1, test1 === 6)
console.log(test2, test2 === 9)

const test3 = new Solution().trap([4,2,3])
console.log(test3, test3 === 1)