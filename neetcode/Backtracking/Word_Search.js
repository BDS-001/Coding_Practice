class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        const used = new Map()

        //cycle through board
        for (let i = 0; i < board.length; i++) {
            const row = board[i]
            for (let j = 0; j < row.length; j++) {
                const letter = row[j]
                //skip anything that is not the first letter
                if (letter !== word[0]) continue

                //check for valid path
                if (backtrack([i, j], 1)) return true
            }
            
        }
        //no valid path found
        return false
    }

    backtrack(pos) {
        used.push(pos)
        if (0) return
    }
}
