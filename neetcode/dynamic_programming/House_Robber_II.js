class Solution {
    constructor () {
        this.cache = new Map()
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
        const startThirdHouse = this.getMaxVal(2)
        return Math.max(startFirstHouse, startSecondHouse, startThirdHouse)
    }

    getMaxVal(i, start=false) {
        if (i >= this.houses.length) return 0
        if (start && i === this.houses.length-1) return 0
        if (this.cache.has(i)) return this.cache.get(i)

        const firstAvailable = this.getMaxVal(i+2, start)
        const secondAvailableNeighbour = this.getMaxVal(i+3, start)
        const maxAmount = this.houses[i] + Math.max(firstAvailable, secondAvailableNeighbour)
        
        this.cache.set(i, maxAmount)
        return maxAmount
    }
}
