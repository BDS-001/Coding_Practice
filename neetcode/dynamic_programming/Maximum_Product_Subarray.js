class Solution {
    constructor() {
        this.max = -Infinity
    }
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums) {
        this.getMax(nums)
        return this.max
    }

    getMax(nums, index=0) {
        if (index >= nums.length) return {min: 1, max: 1}

        const vals = {}
        const curr = nums[index]
        const next = this.getMax(nums, index+1)

        vals.min = Math.min(curr, curr * next.min, curr * next.max)
        vals.max = Math.max(curr, curr * next.min, curr * next.max)
        this.max = Math.max(this.max, vals.max)
        
        return vals
    }

    
}
