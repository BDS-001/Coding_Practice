class Solution {
    constructor() {
        this.cache = new Map()
        this.nums = []
    }
    /**
     * @param {number[]} nums
     * @return {number}
     */
    jump(nums) {
        this.nums = nums
        return this.dp(0)
    }

    dp(i) {
        if (this.cache.has(i)) return this.cache.get(i)
        if (i >= this.nums.length-1) return 0
        let min = Infinity
        if (this.nums[i] == 0) return min

        for (let range = this.nums[i]; range > 0; range--) {
            min = Math.min(min, 1 + this.dp(i+range))
        }
        this.cache.set(i, min)
        return min
    }
}
