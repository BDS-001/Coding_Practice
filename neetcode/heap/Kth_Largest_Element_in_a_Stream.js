class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {
        this.k = k - 1
        this.nums = nums.sort((a,b) => b - a).splice(0, k)
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
        const kLargest = this.nums[this.k]
        if (val < kLargest) return kLargest
        this.nums[this.k] = val
        this.nums.sort((a,b) => b - a)
        return this.nums[this.k]
    }
}
