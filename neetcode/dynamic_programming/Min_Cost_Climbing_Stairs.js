class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost) {
        const start1 = this.calculatePath(cost, 0)
        const start2 = this.calculatePath(cost, 1)
        return Math.min(start1, start2)
    }

    calculatePath(cost, i) {
        if (i >= cost.length) return 0
        return cost[i] + Math.min(this.calculatePath(cost, i+1), this.calculatePath(cost, i+2))
    }
}
