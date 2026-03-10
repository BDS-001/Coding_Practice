class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        return this.greedy(nums)
    }

    bruteForce(nums) {
        let max = -Infinity
        for (let i = 0; i < nums.length; i++) {
            for (let j = i+1; j <= nums.length; j++) {
                const sum = nums.slice(i, j).reduce((val, cur) => val + cur)
                max = Math.max(max, sum)
            }
        }
        return max
    }

    greedy(nums) {
        let max = nums[0]
        let current = nums[0]
        let p = 1

        while(p < nums.length) {
            current = current < 0 ? nums[p] : current + nums[p]
            max = Math.max(max, current)
            p++
        }
        return max
    }
}
