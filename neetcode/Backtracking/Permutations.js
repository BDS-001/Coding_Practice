class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        const map = nums.reduce( (acc, current) => {
            acc[current] = 0
            return acc
        }, {})
        const res = []
        const backtrack = (curr = [], backtrackMap = {...map}) => {
            if (curr.length === nums.length) {
                res.push(curr)
                return
            }
            for (let i = 0; i < nums.length; i++) {
                if (backtrackMap[nums[i]] > 0) continue
                const newMap = {...backtrackMap}
                newMap[nums[i]] = 1
                backtrack([...curr, nums[i]], newMap)
            }
        }
        backtrack()
        return res
    }
}
