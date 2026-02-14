/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {number}
     */
    minMeetingRooms(intervals) {
        const start = []
        const end = []
        for (let i = 0; i < intervals.length; i++) {
            start.push(intervals[i].start)
            end.push(intervals[i].end)
        }

        start.sort((a, b) => a - b)
        end.sort((a, b) => a - b)

        let maxCount = 0
        let curr = 0
        while(start.length > 0) {
            if (end[0] <= start[0]) {
                end.shift()
                curr--
                continue
            }

            start.shift()
            curr++
            maxCount = Math.max(maxCount, curr)
        }
        return maxCount
    }
}