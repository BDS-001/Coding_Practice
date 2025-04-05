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
            if (index >= sortedNums.length) return
            backtrack([...curr, sortedNums[index]], index + 1)

            let newIndex = index
            while(sortedNums[index] === sortedNums[newIndex]) {
                newIndex++;
                if (newIndex >= sortedNums.length) break
            }
            if(newIndex < sortedNums.length) {
                backtrack([...curr, sortedNums[newIndex]], newIndex + 1)
            }
        }
        backtrack()
        return res
    }
}

