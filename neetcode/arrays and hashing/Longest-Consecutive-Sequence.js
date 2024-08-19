class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let longest = 0
        for (let i = 0; i < nums.length; i++) {
            let curr = nums[i]
            let length = 1
            while (nums.includes(curr+1)) {
                length += 1
                curr += 1
            }
            longest = Math.max(longest, length)
        }
        return longest
    }
}
