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

        while(right <= s.length) {
            const vals = [...freq.values()]
            const total = vals.length > 0 ? vals.reduce((total, cur) => total += cur) : 0
            const valid = total === 0 ? true : total - Math.max(...vals) <= k
            console.log('Map: ', vals, '\ntotal:',  total, '\nlongest', longest, '\nk: ',  k, '\nvalid: ', valid, '\n', '---------------------------------------')

            if (valid) {
                right < s.length ? freq.set(s[right], 1 + (freq.get(s[right]) || 0)) : null
                right ++
                longest = Math.max(total, longest)
                continue
            }
            freq.set(s[left], freq.get(s[left]) - 1)
            left ++
        }


        return longest
    }
}
