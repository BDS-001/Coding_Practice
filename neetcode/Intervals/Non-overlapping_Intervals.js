class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number}
     */
    eraseOverlapIntervals(intervals) {
        intervals.sort((a, b) => a[0] - b[0])
        return this.greedy(intervals)
    }

    greedy(intervals) {
        let prev = intervals[0][1]
        let remove = 0
        for (let i = 1; i < intervals.length; i++) {
            if (intervals[i][0] >= prev) {
                prev = intervals[i][1]
                continue
            }
            prev = intervals[i][1] < prev ? intervals[i][1] : prev
            remove++
        }
        return remove
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
