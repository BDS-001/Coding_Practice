class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        const sortedNums = nums.sort((a, b) => a - b)
        const res = []
        const backtrack = (curr = [], index = 0) => {
            res.push(curr)
            for (let i = index; i < sortedNums.length; i++) {
                backtrack([...curr, sortedNums[i]], i + 1)
            }
        }
        backtrack()
        return res
    }
}

