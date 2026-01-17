class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {boolean}
     */
    wordBreak(s, wordDict) {
        const q = [s]
        while (q.length > 0) {
            const currentString = q.pop()
            for (const word of wordDict) {
                const sub = currentString.slice(0, word.length)
                if (sub !== word) continue
                const remaining = currentString.slice(word.length)
                if (remaining === '') return true
                q.push(remaining)
            }
        }
    }
}
