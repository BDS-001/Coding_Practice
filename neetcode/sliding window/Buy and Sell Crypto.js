class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let max = 0

        let left = 0
        let right = left + 1

        while(right < prices.length) {
            if (prices[left] > prices[right]) {
                left = right
            } else {
                max = Math.max(max, prices[right] - prices[left])
            }
            right ++;
        }
        return max
    }
}
