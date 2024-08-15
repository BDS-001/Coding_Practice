class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const sudokuSections = [
            { row: { start: 0, end: 2 }, col: { start: 0, end: 2 } },
            { row: { start: 0, end: 2 }, col: { start: 3, end: 5 } },
            { row: { start: 0, end: 2 }, col: { start: 6, end: 8 } },
            { row: { start: 3, end: 5 }, col: { start: 0, end: 2 } },
            { row: { start: 3, end: 5 }, col: { start: 3, end: 5 } },
            { row: { start: 3, end: 5 }, col: { start: 6, end: 8 } },
            { row: { start: 6, end: 8 }, col: { start: 0, end: 2 } },
            { row: { start: 6, end: 8 }, col: { start: 3, end: 5 } },
            { row: { start: 6, end: 8 }, col: { start: 6, end: 8 } }
        ];

        const rowCheck = new Set()
        const colCheck = new Set()
        const boxCheck = new Set()

        //rows/cols
        for (let row = 0; row < board.length; row++) {
            for (let col = 0; col < board.length; col++) {
                if (rowCheck.has(board[row][col]) || colCheck.has(board[col][row])) return false
                board[row][col] === '.' ? null : rowCheck.add(board[row][col])
                board[col][row] === '.' ? null : colCheck.add(board[col][row])
            }
            rowCheck.clear()
            colCheck.clear()
        }

        //boxes
        for (const section of sudokuSections) {
            for (let row = section.row.start; row <= section.row.end; row++) {
                for (let col = section.col.start; col <= section.col.end; col++) {
                    if (boxCheck.has(board[row][col])) return false
                    board[row][col] === '.' ? null : boxCheck.add(board[row][col])
                }
            }
            boxCheck.clear()
        }

        return true
    }
}
