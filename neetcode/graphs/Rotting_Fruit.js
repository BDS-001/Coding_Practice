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
        return this.simulate()
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

    simulate() {
        if (this.rotten.size === 0 && this.fresh.size > 0) return -1
        let time = 0

        while (this.fresh.size > 0) {
            const freshSize = this.fresh.size
            const currentRotten = [...this.rotten]
            for (const val of currentRotten) {
                const [row, col] = val.split('-').map(Number)
                this.spread(row, col)
            }
            if (freshSize === this.fresh.size) return -1
            time ++;
        }
        
        return time
    }

    spread(row, col) {
        const directions = [
            [row-1, col],   // top
            [row, col-1],   // left
            [row, col+1],   // right
            [row+1, col],   // bottom
        ];

        directions.forEach(([newRow, newCol]) => {
            const coordinate = `${newRow}-${newCol}`;
            if (this.fresh.has(coordinate)) {
                this.fresh.delete(coordinate);
                this.rotten.add(coordinate);
            }
        });
    }
}
