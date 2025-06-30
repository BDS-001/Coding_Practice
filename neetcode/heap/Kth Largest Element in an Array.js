class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) {
        nums = nums.sort((a,b) => b-a)
        return nums[k - 1]
    }
}