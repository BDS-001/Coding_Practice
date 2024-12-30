class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let left = 0
        let right = nums.length - 1

        while(left <=  right) {
            //center
            const mid = Math.floor((left + right) / 2)

            if (nums[mid] === target) return mid
            //right side is in order
            if (nums[right] > nums[mid] && target > nums[mid] && target <= nums[right]) {
                left = mid + 1
            //right side out of order
            } else if (nums[right] < nums[mid] && target <= nums[right]) {
                left = mid + 1
            //left could not contain target
            } else if (nums[left] < nums[mid] && target > nums[mid]) {
                left = mid + 1
            } else {
                right = mid - 1
            }
        }

        return -1
    }
}
