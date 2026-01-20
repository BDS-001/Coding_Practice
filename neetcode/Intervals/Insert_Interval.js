class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} newInterval
     * @return {number[][]}
     */
    insert(intervals, newInterval) {
        for (let i = 0; i < intervals.length; i++) {
            if (newInterval[0] > intervals[i][1]) continue
            if (newInterval[0] > newInterval[0] && newInterval[1] < intervals[i][1]) return intervals
        }
    }
}
