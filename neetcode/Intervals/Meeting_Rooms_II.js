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
        intervals.sort((a, b) => a.start - b.start)
        let remaining = intervals
        let days = 0

        while(remaining.length > 0) {
            const toCheck = remaining
            remaining = []
            for (let i = 1; i < toCheck.length; i++) {
                if (toCheck[i].start >= toCheck[i-1].end) continue
                toCheck[i].end < toCheck[i-1].end ? remaining.push(toCheck[i-1]) : remaining.push(toCheck[i])
            }
            days++
        }
        return days
    }
}

// fails intervals=[(1,5),(2,6),(3,7),(4,8),(5,9)]