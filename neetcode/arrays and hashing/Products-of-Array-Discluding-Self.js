class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const res = []

        const product = (arr) => {
            return arr.reduce((total, num) => total * num, 1)
        }

        for (let index = 0; index < nums.length; index++) {
            const firstHalf = nums.slice(0,index)
            const secondHalf = nums.slice(index + 1)
            res.push(product(firstHalf) * product(secondHalf))
        }
        return res
    }
}
