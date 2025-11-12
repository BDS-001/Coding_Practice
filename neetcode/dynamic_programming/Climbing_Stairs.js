class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        return this.climb(0, n);
    }

    climb(curr, target) {
        if (curr > target) return 0;
        if (curr === target) return 1;

        return this.climb(curr + 1, target) + this.climb(curr + 2, target);
    }
}
