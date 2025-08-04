class Solution {
    constructor() {
        this.grid = []
        this.used = new Set()
        this.maxArea = 0
    }
    
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        if (grid.length < 1) return
        this.grid = grid

        for (let row = 0; row < grid.length; row++) {
            for (let col = 0; col < grid[row].length; col++) {
                const tile = grid[row][col]
                if (tile === 1 && !this.used.has(`${row}-${col}`)) {
                    this.maxArea = Math.max(this.maxArea, this.exploreIsland(row, col))
                }
            }
            
        }

        return this.maxArea
    }

    exploreIsland(row, col) {
        if (row < 0 || row >= this.grid.length) return 0
        if (col < 0 || col >= this.grid[0].length) return 0
        if (this.used.has(`${row}-${col}`)) return 0
        if (this.grid[row][col] !== 1) return 0

        this.used.add(`${row}-${col}`)
        return 1 + this.exploreIsland(row + 1, col) + this.exploreIsland(row-1, col) + this.exploreIsland(row, col+1) + this.exploreIsland(row, col-1)
    }
}
