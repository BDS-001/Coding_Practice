class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins, amount) {
        if (!coins || coins.length === 0) return -1
        coins = coins.sort((a, b) => b-a)
        console.log(coins)
        if (coins[0] > amount) return -1
        
    }
}
