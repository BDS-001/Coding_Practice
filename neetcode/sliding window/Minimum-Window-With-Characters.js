class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        //setup
        let left = 0
        let right = 0
        let shortest = ''
        let letters = new Set(t)

        //freq maps
        const targetFreq = new Map()
        const subFreq = new Map()
        const targetLength = t.length
        for (let i = 0; i < t.length; i++) {
            targetFreq.set(t[i], 1 + (targetFreq.get(t[i]) || 0))
            if (!subFreq.has(t[i])) subFreq.set(t[i], 0)
        }

        //substring tracking
        let sub = ''
        let subTargetCount = 0

        while (left < s.length) {
            //move until left is a valid letter
            if(!letters.has(s[left])) {
                left ++
                if (sub.length > 0) sub = sub.slice(0, left) + sub.slice(left + 1);
                if (right < left) right = left
                continue
            }

            //if sub is valid check if it shortest
            if (subTargetCount === targetLength) {
                //set shortest, move left over
                shortest = (shortest === '' || shortest.length > sub.length) ? sub : shortest
                sub = sub.slice(0, left) + sub.slice(left + 1);
                subFreq.set(s[left], subFreq.get(s[left]) - 1);
                subTargetCount - 1
                left ++;
                continue
            }

            //if current letter is not in t add to sub and continue
            if (!letters.has(s[right])) {
                sub = sub + s[right]
                right ++;
                continue
            }

            //else add letter to freq map
            subFreq.set(s[right], subFreq.get(s[right]) + 1)
            if (subFreq.get(s[right]) > targetFreq.get(s[right])) subTargetCount ++;
            right ++;
        }
        return shortest
    }
}
