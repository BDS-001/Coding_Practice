class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        const sortedNums = nums.sort((a, b) => a - b)
        const res = []
        const backtrack = (curr = [], index = 0) => {
            res.push([...curr])
            for (let i = index; i < sortedNums.length; i++) {
                if (i < index && sortedNums[i] === sortedNums[index]) continue
                curr.push(sortedNums[i])
                backtrack(curr, i + 1)
                curr.pop()
            }
        }
        backtrack()
        return res
    }
}

