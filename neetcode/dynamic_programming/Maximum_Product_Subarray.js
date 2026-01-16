class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums) {
        let max = -Infinity
        for (let start = 0; start < nums.length; start++) {
            for (let end = start+1; end <= nums.length; end++) {
                const val = nums.slice(start, end).reduce((acc, num) => acc * num, 1)
                max = Math.max(val, max)
            }
        }    
        return max    
    }

    
}
