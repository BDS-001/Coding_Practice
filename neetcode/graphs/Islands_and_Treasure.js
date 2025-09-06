class Solution {
    constructor() {
        this.grid = null
        this.used = new Set()
    }
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {
        this.grid = grid
        for (let i = 0; i < grid.length; i++) {
            const row = grid[i]
            for (let j = 0; j < row.length; j++) {
                if (row[j] > 0) {
                    const distance = this.getDistance([i, j])
                    if (distance !== null) row[j] = distance
                    this.used.clear()
                }
            }
            
        }
        return grid
    }

    getDistance(pos) {
        const q = [pos]
        let distance = 0
        
        while(q.length > 0) {
            const length = q.length

            for (let _ = 0; _ < length; _++) {
                const [row, col] = q.shift();
                if (!this.isValidMove([row, col])) continue
                if (this.grid[row][col] === 0) return distance
                this.used.add(`${row}-${col}`)
                
                // add up, down, left, and right neighbors to the queue
                q.push([row - 1, col])
                q.push([row + 1, col])
                q.push([row, col - 1])
                q.push([row, col + 1])
            }
            distance++;
        }
        return null
    }

    isValidMove(pos) {
        const [row, col] = pos
        //bounds
        if (row < 0 || row >= this.grid.length || col < 0 || col >= this.grid[0].length) return false
        //used
        if (this.used.has(`${row}-${col}`)) return false
        //water
        if (this.grid[row][col] === -1) return false
        return true
    }
}
