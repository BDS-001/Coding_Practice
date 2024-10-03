class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        if (matrix.length === 0 || matrix[0].length === 0) return false;

        let top = 0;
        let bottom = matrix.length - 1;
        let row = null;

        if (matrix.length === 1) {
            row = matrix[0];
        } else {
            while (top <= bottom) {
                const mid = Math.floor((top + bottom) / 2);
                if (matrix[mid][0] <= target && (mid === matrix.length - 1 || matrix[mid + 1][0] > target)) {
                    row = matrix[mid];
                    break;
                } else if (matrix[mid][0] > target) {
                    bottom = mid - 1;
                } else {
                    top = mid + 1;
                }
            }
        }

        console.log(row)
        if (row === null) return false;

        let start = 0
        let end = row.length - 1
        while (start <= end) {
            const center = Math.floor( (start + end) / 2)
            if (row[center] === target) return true
            if (row[center] > target) {
                end = center - 1
            } else {
                start = center + 1
            }
        }
        return false
    }
}
