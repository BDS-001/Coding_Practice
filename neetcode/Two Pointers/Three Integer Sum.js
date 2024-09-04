class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a, b) => a - b);
        const res = [];
        console.log(nums)
        
        for (let i = 0; i < nums.length - 2; i++) {
            if (nums[i] > 0) break;
            if (i > 0 && nums[i] === nums[i - 1]) continue;
            
            let left = i + 1;
            let right = nums.length - 1;
            
            while (left < right) {
                const curr = nums[i] + nums[left] + nums[right];
                console.log('total: ', curr, 'numbers: ', nums[i] , nums[left] , nums[right], 'Indexes: ', i, left, right)
                
                if (curr > 0) {
                    right--;
                } else if (curr < 0) {
                    left++;
                } else {
                    res.push([nums[i], nums[left], nums[right]]);
                    while (left < right && nums[right] === nums[right - 1]) right--;
                    left++;
                    right--;
                    while (left < right && nums[right] === nums[right + 1]) right--;
                }
            }
        }
        return res;
    }
}

// new Solution().threeSum([0,0,0])