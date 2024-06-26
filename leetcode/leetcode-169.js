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