class Solution {

    constructor() {
        this.cache = new Map()
        this.nums = []
    }
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canJump(nums) {
        this.nums = nums
        return this.greedy() 
    }

    dp(index) {
        if (index >= this.nums.length -1) return true
        if (this.cache.has(index)) return this.cache.get(index)
        let valid = false
        for (let i = this.nums[index]; i > 0; i--) {
            valid = valid || this.dp(index+i)
            if (valid) break
        }
        this.cache.set(index, valid)
        return valid
    }

    greedy() {
        let goal = this.nums.length - 1
        for (let i = goal-1; i >= 0; i--) {
            if (i + this.nums[i] >= goal) goal = i
        }
        return goal == 0
    }
}
