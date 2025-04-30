class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        const used = new Map()

        //backtrack function
        const backtrack = (pos, curr, found = false) => {
            const [row, col] = pos
            used.set(`${row},${col}`, true)

            //check the 4 directions, needs to be in bounds, not used, matches the next letter

            //one row down
            if (row + 1 < board.length && !used.has(`${row + 1},${col}`) && board[row+1][col] === word[curr]) {
                found = found || backtrack([row+1, col], curr + 1)
            }
            used.delete(`${row + 1},${col}`)

            //one row up
            if (row - 1 >= 0 && !used.has(`${row - 1},${col}`) && board[row-1][col] === word[curr]) {
                found = found || backtrack([row-1, col], curr + 1)
            }
            used.delete(`${row - 1},${col}`)

            //one column forward
            if (col + 1 < board[0].length && !used.has(`${row},${col + 1}`) && board[row][col + 1] === word[curr]) {
                found = found || backtrack([row, col + 1], curr + 1)
            }
            used.delete(`${row},${col + 1}`)

            //one column backwards
            if (col - 1 >= 0 && !used.has(`${row},${col - 1}`) && board[row][col - 1] === word[curr]) {
                found = found || backtrack([row, col - 1], curr + 1)
            }
            used.delete(`${row},${col + 1}`)

            return found
        }

        //cycle through board
        for (let i = 0; i < board.length; i++) {
            const row = board[i]
            for (let j = 0; j < row.length; j++) {
                const letter = row[j]
                //skip anything that is not the first letter
                if (letter !== word[0]) continue

                //check for valid path
                if (backtrack([i, j], 1)) return true

                //path failed clear the map
                used.clear()
            }
            
        }
        //no valid path found
        return false
    }
}
