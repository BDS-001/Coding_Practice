class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} queries
     * @return {number[]}
     */
    minInterval(intervals, queries) {
        const size = ([s, e]) => e - s;
        intervals.sort((a, b) => size(a) - size(b));
        const res = []
        queries.forEach((q) => {
            for (let i = 0; i < intervals.length; i++) {
                const interval = intervals[i];
                
            }
        })
    }
}

