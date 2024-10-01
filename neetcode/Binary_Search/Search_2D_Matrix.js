class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let top = 0
        let bottom = matrix.length - 1
        const row = null

        while(start <= end) {
            const mid = Math.floor( (top + bottom) / 2)
            if (top === bottom || matrix[top][0] === target) {
                row = matrix[mid]
                break
            } else if (matrix[top][0] > target) {
                end = center - 1
            } else {
                start = center + 1
            }
        }

        start = 0
        end = matrix.length - 1
        while (start <= end) {
            const center = Math.floor( (start + end) / 2)
            if (nums[center] === target) return center
            if (nums[center] > target) {
                end = center - 1
            } else {
                start = center + 1
            }
        }
        return -1
    }
}
