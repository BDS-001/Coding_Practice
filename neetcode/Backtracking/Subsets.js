class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        const res = []
        const getSet = (curr, index) => {
            res.push(curr)
            for (let i = index; i < nums.length; i++) {
                getSet([...curr, nums[i]], i + 1)
            }
        }
        getSet([], 0);
        return res;
    }
}
