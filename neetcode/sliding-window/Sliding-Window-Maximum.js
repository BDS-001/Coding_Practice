class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        const maxList = []
        let left = 0
        let right = k - 1

        while(right < nums.length) {
            let max = -Infinity
            for (let i = left; i <= right; i++) {
                max = Math.max(nums[i], max)
            }
            maxList.push(max)
            left ++;
            right ++;
        }
        return maxList
    }
}
