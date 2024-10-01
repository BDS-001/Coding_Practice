class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let start = 0
        let end = matrix.length - 1
        let nums = null

        while(start <= end) {
            const center = Math.floor( (start + end) / 2)
            if (matrix[center] === target) {
                nums = matrix[center]
            }
            if (matrix[center] > target) {
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
