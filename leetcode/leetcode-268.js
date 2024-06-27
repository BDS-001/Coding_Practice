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


var missingNumber2 = function(nums) {
    let total = 0
    let numTotal = 0

    for (let i = 0; i < nums.length; i++) {
        total += i
        numTotal += nums[i]
    }
    total += nums.length
    return total - numTotal
};