class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        const left = 0
        const right = nums.length

        while(left <=  right) {
            const mid = Math.floor((left + right) / 2)

            if (nums[mid] === target) return mid
            if (nums[right] > nums[mid] && target > mid) {
                left = mid + 1
            } else {
                right = mid
            }
            break
        }

        return -1
    }
}
