class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number}
     */
    eraseOverlapIntervals(intervals) {
        intervals.sort((a, b) => a[0] - b[0])
        return intervals.length - this.bruteForce(intervals)
    }

    bruteForce(intervals) {
        if (intervals.length === 1) return 1

        let intervalsLength = -1
        for (let i = 1; i < intervals.length; i++) {
            if (intervals[i][0] < intervals[i-1][1]) {
                const remove = intervals[i][1] < intervals[i-1][1] ? i-1 : i
                intervalsLength = Math.max(intervalsLength, this.bruteForce([...intervals.slice(0, remove), ...intervals.slice(remove+1)]))
            }
        }

        return intervalsLength === -1 ? intervals.length : intervalsLength
    }
}
