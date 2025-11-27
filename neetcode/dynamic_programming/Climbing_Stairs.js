class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        let a = 1
        let b = 1
        for (let i = 1; i < n; i++) {
            [a, b] = [a + b, a]
        }
        return a
    }
}
