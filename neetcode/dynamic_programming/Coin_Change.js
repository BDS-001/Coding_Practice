class Solution {
    constructor() {
        this.coins = []
        this.smallest = null
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
        this.check(amount)
        return this.smallest !== null ? this.smallest : -1
    }

    check(amount, i=0, total=0, count=0) {
        console.log(amount, i, total, count)
        if (i >= this.coins.length || this.smallest !== null || total > amount) return
        if (total === amount) {
            this.smallest = count
            return
        }

        for (let index = i; index < this.coins.length; index++) {           
            this.check(amount, index, total+this.coins[index], count+1)
        }
    }
}

coins=[357,239,73,52]
amount=9832