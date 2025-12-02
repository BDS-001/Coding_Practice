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
        this.houses = nums
        const startFirstHouse = this.getMaxVal(0)
        const startSecondHouse = this.getMaxVal(1)
        return Math.max(startFirstHouse, startSecondHouse)
    }

    getMaxVal(i) {
        if (i >= this.houses.length) return 0
        if (this.cache.has(i)) return this.cache.get(i)

        const firstAvailable = this.getMaxVal(i+2)
        const secondAvailableNeighbour = this.getMaxVal(i+3)
        const maxAmount = this.houses[i] + Math.max(firstAvailable, secondAvailableNeighbour)
        
        this.cache.set(i, maxAmount)
        return maxAmount
    }
}
