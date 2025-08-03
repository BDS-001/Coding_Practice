class Solution {
    
    constructor() {
        this.grid = []
        this.used = new Set()
        this.islandCount = 0
    }
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        if (grid.length < 1) return
        this.grid = grid

        for (let row = 0; row < grid.length; row++) {
            for (let col = 0; col < grid[row].length; col++) {
                const tile = grid[row][col]
                if (tile === "1" && !this.used.has(`${row}-${col}`)) {
                    this.exploreIsland(row, col)
                    this.islandCount++;
                }
            }
            
        }

        return this.islandCount
    }

    exploreIsland(row, col) {
        if (row < 0 || row >= this.grid.length) return
        if (col < 0 || col >= this.grid[0].length) return
        if (this.used.has(`${row}-${col}`)) return
        if (this.grid[row][col] !== "1") return

        this.used.add(`${row}-${col}`)
        this.exploreIsland(row + 1, col)
        this.exploreIsland(row-1, col)
        this.exploreIsland(row, col+1)
        this.exploreIsland(row, col-1)
    }
}
