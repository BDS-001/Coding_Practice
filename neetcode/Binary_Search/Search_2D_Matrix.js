class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let top = 0
        let bottom = matrix.length - 1
        let row = null

        while(top <= bottom) {
            const mid = Math.floor( (top + bottom) / 2)
            if (top === bottom || matrix[top][0] === target) {
                row = matrix[mid]
                break
            } else if (matrix[top][0] > target) {
                bottom = mid - 1
            } else {
                top = mid + 1
            }
        }

        let start = 0
        let end = matrix.length - 1
        while (start <= end) {
            const center = Math.floor( (start + end) / 2)
            if (row[center] === target) return center
            if (row[center] > target) {
                end = center - 1
            } else {
                start = center + 1
            }
        }
        return -1
    }
}
