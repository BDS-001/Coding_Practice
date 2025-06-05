class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        const res = [];
        function combine(curr, index, total=0) {
            if (total > target || index >= nums.length) return
            if (total === target) {
                res.push(curr)
                return
            }
            combine([...curr, nums[index]], index, total + nums[index])
            combine([...curr], index + 1, total)
        }
        combine([], 0)
        return res
    }
}
