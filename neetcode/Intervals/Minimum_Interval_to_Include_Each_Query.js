class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} queries
     * @return {number[]}
     */
    minInterval(intervals, queries) {
        const size = ([s, e]) => e - s + 1;
        intervals.sort((a, b) => size(a) - size(b));
        const res = []
        queries.forEach((q) => {
            let ans = -1
            for (let i = 0; i < intervals.length; i++) {
                const interval = intervals[i];
                if (q >= interval[0] && q<= interval[1]) {
                    ans = size(interval)
                    break
                }
            }
            res.push(ans)
        })
        return res
    }
}

