/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let start = 0
    let end = nums.length

    while (true) {
        let index = Math.floor((start + end)/2)
        if (nums[index] === target) return index
        if (end - start < 2) {
            if (nums[index] > target) return index
            return index + 1
        }
        if (nums[index] > target) end = index
        if (nums[index] < target) start = index
    }
};

console.log(searchInsert([1,3,5,6], 7))