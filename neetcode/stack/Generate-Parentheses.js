class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        const res = []

        const genPar = (set = '', open = 0) => {
            if (set.length > n * 2) return
            if (set.length === n * 2 && open === 0) res.push(set)

            if (open > 0) genPar(set + ')', open - 1)
            genPar(set + '(', open + 1)
        }
        
        genPar()
        return res
    }
}


console.log(new Solution().generateParenthesis(1))