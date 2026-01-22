class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        const newIntervals = []
        let newRange = intervals[0]

        for (let index = 1; index < intervals.length; index++) {
            const range = intervals[index];

            if (range[0] > newRange[1]) {
                newIntervals.push(newRange)
                newRange = range
                continue
            }
            
            newRange = [newRange[0], Math.max(newRange[1], range[1])]
        }
        newIntervals.push(newRange)
        return newIntervals
    }
}
//intervals are not sorted
//fail: intervals=[[1,4],[0,4]]