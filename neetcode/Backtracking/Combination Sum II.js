class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        candidates = candidates.sort()
        console.log(candidates)
        const res = [];
        function combine(curr, index, total=0) {
            if (total === target) {
                res.push(curr)
                return
            }
            if (total > target || index >= candidates.length) return
            combine([...curr, candidates[index]], index + 1, total + candidates[index])
            
            let newIndex = index
            while(newIndex < candidates.length) {
                newIndex ++;
                if (candidates[index] != candidates[newIndex]) break
            }
            combine([...curr], newIndex, total)
        }
        combine([], 0)
        return res
    }
}
