class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(heights) {
        let left = 0
        let right = heights.length - 1
        let maxRain = 0

        while(left < right) {
            const height = Math.min(heights[left], heights[right])
            let totalRain = 0
            for (let i = left + 1; i < right; i++) {
                totalRain += Math.max(0, height - heights[i])
            }
            
            maxRain = Math.max(maxRain, totalRain)
            if (heights[left] > heights[right]) {
                right --;
            } else {
                left ++;
            }
        }
        return maxRain
    }
}
