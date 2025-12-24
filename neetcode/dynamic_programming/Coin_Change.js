class Solution {
    constructor() {
        this.coins = []
        this.cache = new Map()
    }
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins, amount) {
        if (amount === 0) return 0
        if (!coins || coins.length === 0) return -1
        this.coins = coins.sort((a, b) => b-a)
        if (this.coins[coins.length - 1] > amount) return -1
        const small = this.check(amount)
        return small === Infinity ? -1 : small
    }

    check(remainder, total=0) {
        if (remainder < 0) return Infinity
        if (remainder === 0) return 0

        let small = Infinity
        if (this.cache.has(remainder)) return this.cache.get(remainder)
        for (let i = 0; i < this.coins.length; i++) {
            const val = this.coins[i]
            if (val > remainder) continue 
            small = Math.min(small, 1 + this.check(remainder - val, total+this.coins[i]))
        }
        this.cache.set(remainder, small)
        return small
    }
}

coins=[357,239,73,52]
amount=9832