/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
//2 pointer method
var threeSumClosest = function(nums, target) {
    nums.sort((a, b) => a - b)
    let closestSum = Infinity
    let smallestDifference = Infinity

    for (let i = 0; i < nums.length; i++) {
        let left = i + 1
        let right = nums.length - 1
        
        while (left < right) {
            const currentSum = nums[i] + nums[left] + nums[right]
            const distance = Math.abs(currentSum - target)
            if (distance === 0) return target
            if (distance < smallestDifference) {
                closestSum = currentSum
                smallestDifference = distance
            }

            (currentSum < target) ? left++ : right--
        }
    }
    return closestSum
};