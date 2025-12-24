class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins, amount) {
        this.coins = coins
        this.cache = new Map()

        const result = this.check(amount)
        return result === Infinity ? -1 : result
    }

    check(remainder) {
        if (remainder === 0) return 0
        if (remainder < 0) return Infinity
        if (this.cache.has(remainder)) return this.cache.get(remainder)

        let min = Infinity
        for (const coin of this.coins) {
            min = Math.min(min, 1 + this.check(remainder - coin))
        }

        this.cache.set(remainder, min)
        return min
    }
}