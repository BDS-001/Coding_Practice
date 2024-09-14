class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if (t.length > s.length || s === '') return ''
        //setup
        let left = 0
        let right = 0
        let shortest = [0] // length, left, right
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
        let subTargetCount = 0

        while (left < s.length) {
            //move until left is a valid letter
            if(!letters.has(s[left])) {
                left ++
                if (right < left) right = left
                continue
            }

            //if sub is valid check if it shortest
            if (subTargetCount === targetLength) {
                //set shortest, move left over
                shortest = shortest[0] === null ? [right - left, left, right] : shortest[0] < right - left ? shortest : [right - left, left, right]
                subFreq.set(s[left], subFreq.get(s[left]) - 1);
                if (subFreq.get(s[left]) < targetFreq.get(s[left])) subTargetCount - 1
                left ++;
                continue
            }

            //if current letter is not in t add to sub and continue
            if (!letters.has(s[right])) {
                right ++;
                continue
            }

            //else add letter to freq map
            subFreq.set(s[right], subFreq.get(s[right]) + 1)
            if (subFreq.get(s[right]) <= targetFreq.get(s[right])) subTargetCount ++;
            right ++;
        }
        return shortest[0] === null ? '' : s.slice(shortest[1], shortest[2] + 1);
    }
}
