/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const dict = {}

    for (let i = 0; i < nums.length; i++) {
        if (dict[nums[i]]) {
            dict[nums[i]] += 1
            continue
        }
        dict[nums[i]] = 1
    }

    return Object.entries(dict).sort((a, b) => b[1] - a[1])[0][0]
};

var majorityElement = function(nums) {
    if (nums.length === 1) return nums[0]
    const newNums = nums.sort((a,b) => b - a)
    let highest = [null, 0]
    let currentNum = [nums[0], 1]

    for (let i = 1; i < newNums.length; i++) {
        if (newNums[i] != currentNum[0]) {
            if (currentNum[1] > highest[1]) highest = currentNum
            currentNum = [newNums[i], 1]
            continue
        }
        currentNum[1] += 1
    }

    return currentNum[1] > highest[1] ? currentNum[0] : highest[0]
};