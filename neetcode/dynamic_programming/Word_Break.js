class Solution {
    constructor() {
        this.map = new Map()
    }
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {boolean}
     */
    wordBreak(s, wordDict) {
        if (s.length === 0) return true
        if (this.map.has(s)) return this.map.get(s)
        for (const word of wordDict) {
                const sub = s.slice(0, word.length)
                if (sub !== word || !this.wordBreak(s.slice(word.length), wordDict)) continue
                this.map.set(s, true)
                return true
        }
        this.map.set(s, false)
        return false
    }
}
