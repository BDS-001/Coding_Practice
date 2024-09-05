class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let left = 0
        let right = heights.length - 1
        let maxWater = 0

        while(left < right) {
            const height = Math.min(heights[left], heights[right])
            const water = height * (right - left)
            maxWater = Math.max(maxWater, water)
            if (heights[left] > heights[right]) {
                right --;
            } else {
                left ++;
            }
        }
        return maxWater
    }
}
