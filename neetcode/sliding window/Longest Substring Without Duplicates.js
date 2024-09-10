class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let longest = 0
        let string = []

        let right = 0
        while (right < s.length) {
            if (string.includes(s[right])) {
                //if char in substring remove everything untill the repeated char
                longest = Math.max(string.length, longest)
                while(string[0] != s[right]) {
                    string.shift()
                }
                string.shift()
            }
            string.push(s[right])
            right ++;
        }
        return Math.max(longest, string.length)
    }
}
