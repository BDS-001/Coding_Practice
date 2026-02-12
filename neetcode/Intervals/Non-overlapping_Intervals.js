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

        let overlap = false
        for (let i = 1; i < intervals.length; i++) {
            if (intervals[i][0] < intervals[i-1][1]) {
                overlap = true
                break
            }
        }
        if (overlap === false) return intervals.length

        let leastRemoved = -1
        for (let i = 0; i < intervals.length; i++) {
            leastRemoved = Math.max(leastRemoved, this.bruteForce([...intervals.slice(0, i), ...intervals.slice(i+1)]))
        }
        return leastRemoved
    }
}
