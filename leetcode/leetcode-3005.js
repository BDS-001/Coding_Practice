/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function(nums) {
    const freq = {}

    for (let i = 0; i < nums.length; i++) {
        freq[nums[i]] ? freq[nums[i]] += 1 : freq[nums[i]] = 1
    }

    let entries = Object.entries(freq);
    entries.sort(([, valueA], [, valueB]) => valueB - valueA);

    const max = entries[0][1]
    let total = 0
    for (let i = 0; i < entries.length; i++) {
        if (entries[i][1] < max) return total
        total += max
    }
};