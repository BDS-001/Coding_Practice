class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} newInterval
     * @return {number[][]}
     */
    insert(intervals, newInterval) {
        const replace = []
        let insertIdx = intervals.length

        for (let i = 0; i < intervals.length; i++) {
            if (newInterval[0] > intervals[i][1]) continue
            if (newInterval[1] < intervals[i][0]) {
                insertIdx = i
                break
            }
            replace.push(i)
        }

        if (replace.length === 0) {
            return [...intervals.slice(0, insertIdx), newInterval, ...intervals.slice(insertIdx)]
        }

        const newInt = [
            Math.min(newInterval[0], intervals[replace[0]][0]),
            Math.max(newInterval[1], intervals[replace[replace.length - 1]][1])
        ]
        return [...intervals.slice(0, replace[0]), newInt, ...intervals.slice(replace[replace.length - 1] + 1)]
    }
}