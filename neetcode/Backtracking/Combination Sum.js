class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        const res = [];
        function combine(curr) {
            let total = curr.reduce((acc, current) => acc + current, 0)
            if (total > target) return
            if (total === target) {
                res.push(curr)
                return
            }
            
            for (let i = 0; i < nums.length; i++) {
                combine([...curr, nums[i]])
            }
        }
        combine([], 0)
        return res
    }
}
