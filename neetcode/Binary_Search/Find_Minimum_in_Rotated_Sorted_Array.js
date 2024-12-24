class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let left = 0
        let right = nums.length - 1

        while (left < right) {
            const mid = Math.floor((left + right) / 2)
            if (nums[right] > nums[mid]) {
                right = mid
            } else {
                left = mid + 1
            }
        }
        console.log(left, right, nums[left], nums[right])
        return nums[left]
    }
}
