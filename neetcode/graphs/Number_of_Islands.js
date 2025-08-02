class Solution {
    
    constructor() {
        this.grid = []
        this.used = []
        this.islandCount = 0
    }
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        this.grid = grid

        for (let row = 0; row < grid.length; row++) {
            for (let col = 0; col < grid[row].length; col++) {
                const tile = grid[row][col]
                if (tile === 1 && !used.includes(`${row}-${col}`)) {
                    exploreIsland()
                    this.islandCount++;
                }
            }
            
        }

        return this.islandCount
    }

    exploreIsland() {
        // traverse grid for adjacent tiles, add each coordinate key to used
    }
}
