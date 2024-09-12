class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        const groups = []
        let right = 0
        let left = 0
        while(right < s.length) {
            if (s[right] != s[left]) {
                groups.push({letter: s[left], pointers:[left, right - 1], length: right - left})
                left = right
                continue
            }
            if (right === s.length - 1) {
                console.log(right, s[left], left, right)
                groups.push({letter: s[left], pointers:[left, right], length: right + 1 - left})
                break
            }
            right ++
        }
        let longest = 0
        console.log(groups)

        return longest
    }
}
