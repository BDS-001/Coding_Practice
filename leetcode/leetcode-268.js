/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    const newNums = nums.sort((a, b) => a - b);

    for (let i = 0; i < newNums.length; i++) {
        if (newNums[i] != i) return i
    }
    return newNums.length
};