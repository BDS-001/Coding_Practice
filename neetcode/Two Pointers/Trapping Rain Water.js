class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(heights) {
        let left = 0
        let right = left + 1
        let collect = false
        let maxRain = 0

        while(right < heights.length) {
            console.log('index:' , left, right, 'values:', heights[left], heights[right], 'max:', maxRain)
            if (heights[left] === 0) {
                //move until left is not 0
                left ++;
                right = left + 1
            } else if (heights[right] > heights[right - 1] && !collect) {
                // once right starts to increase set collect to true
                collect = true;
            } else if (collect && heights[right] < heights[right - 1]) {
                // if right starts to decrease while collect is active, collec the water and reset
                console.log('hit')
                const maxHeight = Math.min(heights[left], heights[right - 1])
                for (let i = left + 1; i < right - 1; i++) {
                    maxRain += maxHeight - heights[i]
                    console.log(maxHeight - heights[i])
                }
                left = right - 1
                collect = false
            } else {
                //increment right
                right ++;
            }
        }
        return maxRain
    }
}

const test1 = new Solution().trap([0,1,0,2,1,0,1,3,2,1,2,1])
const test2 = new Solution().trap([4,2,0,3,2,5])
console.log(test1, test1 === 6)
console.log(test2, test2 === 9)