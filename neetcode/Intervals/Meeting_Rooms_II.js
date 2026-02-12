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
        const remaining = []
        let days = 1

        let prev = intervals[0].end
        for (let i = 1; i < array.length; i++) {
            if (intervals[i].start >= intervals[i-1].end) continue
            intervals[i].end < intervals[i-1].end ? remaining.push(intervals[i-1]) : remaining.push(intervals[i])
        }
    }
}
