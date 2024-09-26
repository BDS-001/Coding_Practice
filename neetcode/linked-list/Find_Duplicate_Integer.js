class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        const used = new Set()
        for (let i = 0; i < nums.length; i++) {
            if (used.has(nums[i])) return nums[i]
            used.add(nums[i])
        }
    }
}

