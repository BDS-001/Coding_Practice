class Solution {
    constructor() {
        this.fresh = new Set()
        this.rotten = new Set()
    }
    
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        this.getInitialValues(grid)
    }

    getInitialValues(grid) {
        for (let row = 0; row < grid.length; row++) {
            for (let col = 0; col < grid[row].length; col++) {
                let cellValue = grid[row][col];
                if (cellValue === 1) this.fresh.add(`${row}-${col}`)
                if (cellValue === 2) this.rotten.add(`${row}-${col}`)
            }
        }
    }
}
