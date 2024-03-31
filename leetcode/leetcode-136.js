/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    if (nums.length === 1) return nums[0]

    let xor = 0
    for (let i = 0; i < nums.length; i++) {
        xor ^= nums[i]
    }
    return xor
};

