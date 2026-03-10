class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        return this.bruteForce(nums)
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

    greedy() {

    }
}
