class Solution {

    constructor() {
        this.safe = new Set()
    }
    /**
     * @param {character[][]} board
     * @return {void} Do not return anything, modify board in-place instead.
     */
    solve(board) {
        this.findSafeRegions(board)
        this.removeUnsafe(board)
        return board
    }

    findSafeRegions(board) {
        const lastRow = board.length - 1
        const lastCol = board[0].length - 1

        for (let row = 0; row < board.length; row++) {
            for (let col = 0; col < board[row].length; col++) {
                if (row !== 0 && row !== lastRow && col !== 0 && col !== lastCol) continue
                if (board[row][col] === 'X') continue
                this.traverseSafeRegion(board, {row, col})
            }
        }
    }

    traverseSafeRegion(board, position) {
        const {row, col} = position
        if (row < 0 || row >= board.length || col < 0 || col >= board[0].length) return
        if (board[row][col] === 'X') return
        if (this.safe.has(`${row}-${col}`)) return

        this.safe.add(`${row}-${col}`)

        this.traverseSafeRegion(board, {row: row - 1, col})
        this.traverseSafeRegion(board, {row: row + 1, col})
        this.traverseSafeRegion(board, {row, col: col - 1})
        this.traverseSafeRegion(board, {row, col: col + 1})
    }

    removeUnsafe(board) {
        for (let row = 0; row < board.length; row++) {
            for (let col = 0; col < board[row].length; col++) {
                if (board[row][col] === 'X') continue
                if (this.safe.has(`${row}-${col}`)) continue
                board[row][col] = 'X'
            }
        }
    }
}