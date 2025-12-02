class Solution {
    constructor() {
        this.cost
        this.cache = new Map()
    }
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost) {
        this.cost = cost
        const start1 = this.calculatePath(0)
        const start2 = this.calculatePath(1)
        return Math.min(start1, start2)
    }

    calculatePath(i) {
        if (i >= this.cost.length) return 0
        if (this.cache.has(i)) return this.cache.get(i)
        
        const minCost = this.cost[i] + Math.min(this.calculatePath(i+1), this.calculatePath(i+2))
        this.cache.set(i, minCost)
        return minCost
    }
}
