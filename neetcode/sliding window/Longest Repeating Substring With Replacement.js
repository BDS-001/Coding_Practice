class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        //slide window until string is invalid, sub highest freq from k
        //if invalid move left until valid again, if valid move right
        const freq = new Map()
        let right = 0
        let left = 0
        let longest = 0

        while(right < s.length) {
            freq.set(s[right], 1 + (count.get(s[r]) || 0))
        }


        return longest
    }
}
