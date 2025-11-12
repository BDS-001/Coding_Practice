class Solution {
    constructor() {
        this.total = 0
        this.n
    }

    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        this.n = n
        this.climb()
        return this.total
    }

    climb(curr=0) {
        if (this.n < curr) return
        if (this.n === curr) {
            this.total++
            return
        }
        this.climb(curr + 1)
        this.climb(curr + 2)
    }
}
