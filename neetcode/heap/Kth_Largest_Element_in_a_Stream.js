class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {
        this.k = k
        this.nums = nums
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
        this.nums.push(val)
        return this.nums.sort((a, b) => b - a)[this.k - 1]
    }
}
