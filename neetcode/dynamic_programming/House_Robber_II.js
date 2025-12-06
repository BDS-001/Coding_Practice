class Solution {
    constructor () {
        //this.cache = new Map()
        this.houses
    }
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        if (nums.length <= 3) return Math.max(...nums)
        this.houses = nums
        const startFirstHouse = this.getMaxVal(0, true)
        const startSecondHouse = this.getMaxVal(1)
        return Math.max(startFirstHouse, startSecondHouse)
    }

    getMaxVal(i, start=false) {
        if (i >= this.houses.length || (start && i === this.houses.length - 1)) return 0
        const pair = this.houses[i] + this.getMaxVal(i+2, start)
        const nextHouse = this.getMaxVal(i+1, start)
        return Math.max(pair, nextHouse)
    }
}

const testFail = [5,1,2,6,12,7,9,3,4,10]
//answer = 33

const testthis = [1,3,5,7,9,11,13,15,17,19,2,4,6,8,10,12,14,16,18,20,21,23,25,27,29,31,33,35,37,39,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,99,97,95,93,91,89,87,85,83,81,79,77,75,73,71,69,67,65,63,61,59,57,55,53,51,49,47,45,43,41,39,37,35,33,31,29,27,25,23]
//too long
console.log(new Solution().rob(testthis) === 2540)