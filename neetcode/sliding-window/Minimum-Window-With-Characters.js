class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if (t.length > s.length || s === '') return ''
        
        // Setup
        let left = 0
        let right = 0
        let shortest = [Infinity, 0, 0] // [length, left, right]
        let letters = new Set(t)
        
        // Frequency maps
        const targetFreq = new Map()
        const subFreq = new Map()
        for (let char of t) {
            targetFreq.set(char, (targetFreq.get(char) || 0) + 1)
            subFreq.set(char, 0)
        }
        
        // Substring tracking
        let subTargetCount = 0
        
        while (right < s.length) {
            // Expand window
            if (letters.has(s[right])) {
                subFreq.set(s[right], subFreq.get(s[right]) + 1)
                if (subFreq.get(s[right]) <= targetFreq.get(s[right])) {
                    subTargetCount++
                }
            }
            
            // Contract window if possible
            while (subTargetCount === t.length) {
                // Update shortest if current window is smaller
                if (right - left + 1 < shortest[0]) {
                    shortest = [right - left + 1, left, right]
                }
                
                if (letters.has(s[left])) {
                    subFreq.set(s[left], subFreq.get(s[left]) - 1)
                    if (subFreq.get(s[left]) < targetFreq.get(s[left])) {
                        subTargetCount--
                    }
                }
                left++
            }
            
            right++
        }
        
        return shortest[0] === Infinity ? '' : s.slice(shortest[1], shortest[2] + 1)
    }
}