class Solution {
    constructor() {
        this.pacificCells = new Set();
        this.atlanticCells = new Set();
        this.heights = null;
    }

    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {
        this.heights = heights;
        this.checkPacific();
        this.checkAtlantic();
        return this.processResult();
    }

    checkPacific() {
        for (let row = 0; row < this.heights.length; row++) {
            this.traceFlow([row, 0], this.pacificCells);
        }
        for (let col = 0; col < this.heights[0].length; col++) {
            this.traceFlow([0, col], this.pacificCells);
        }
    }

    checkAtlantic() {
        const maxRow = this.heights.length - 1;
        const maxCol = this.heights[0].length - 1;
        for (let row = 0; row < this.heights.length; row++) {
            this.traceFlow([row, maxCol], this.atlanticCells);
        }
        for (let col = 0; col < this.heights[0].length; col++) {
            this.traceFlow([maxRow, col], this.atlanticCells);
        }
    }

    traceFlow(coordinates, cellsSet, visited = new Set()) {
        const [row, col] = coordinates;
        const key = `${row}-${col}`;

        visited.add(key);
        cellsSet.add(key);

        const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];

        for (const [dRow, dCol] of directions) {
            const newRow = row + dRow;
            const newCol = col + dCol;
            const newKey = `${newRow}-${newCol}`;

            if (newRow >= 0 && newRow < this.heights.length &&
                newCol >= 0 && newCol < this.heights[0].length &&
                !visited.has(newKey) &&
                !cellsSet.has(newKey)) {
                this.traceFlow([newRow, newCol], cellsSet, visited);
            }
        }
    }

    processResult() {
        return Array.from(this.pacificCells)
            .filter(key => this.atlanticCells.has(key))
            .map(key => key.split('-').map(Number));
    }
}
