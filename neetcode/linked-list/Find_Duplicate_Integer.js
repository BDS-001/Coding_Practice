// class Solution {
//     /**
//      * @param {number[]} nums
//      * @return {number}
//      */
//     findDuplicate(nums) {
//         const used = new Set()
//         for (let i = 0; i < nums.length; i++) {
//             if (used.has(nums[i])) return nums[i]
//             used.add(nums[i])
//         }
//     }
// }

class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        let slow = 0
        let fast = 0
        while(true) {
            slow = nums[slow]
            fast = nums[nums[fast]]
            if (slow === fast) break
        }

        let slow2 = 0
        while (true) {
            slow = nums[slow]
            slow2 = nums [slow2]
            if (slow === slow2) return slow
        }
    }
}
