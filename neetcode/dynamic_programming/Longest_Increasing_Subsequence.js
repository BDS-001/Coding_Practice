class Solution {
    constructor() {
        this.map = new Map()
        this.globalMax = -Infinity
    }
    /**
     * @param {number[]} nums
     * @return {number}
     */
    lengthOfLIS(nums, index=0) {

    }

    DP(nums, index=0) {
        if (index === nums.length-1) return 1
        if (this.map.has(index)) return this.map.get(index)
        let max = 1
        for (let i = index+1; i < nums.length; i++) {
            if (nums[index] > nums[i]) continue
            max = Math.max(max, 1 + this.DP(nums, i))
        }
        this.globalMax = Math.max(max, this.globalMax)
        this.map.set(index, max)
        return max
    }
}
