class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let start = 0
        let end = nums.length - 1
        while (start <= end) {
            const center = Math.floor( (start + end) / 2)
            if (nums[center] === target) return center
            if (nums[center] > target) {
                end = center - 1
            } else {
                start = center + 1
            }
        }
        return -1
    }
}
