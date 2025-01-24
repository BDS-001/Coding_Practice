/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */

    constructor() {
        this.result = -Infinity
    }

    maxPathSum(root) {
        this.getMaxSum(root)
        return this.result
    }

    getMaxSum(node) {
        if (!node) return 0

        const left = this.getMaxSum(node.left)
        const right = this.getMaxSum(node.right)

        //check for just the node, node and left, node and right
        const nodePathVal = Math.max(node.val, node.val + left, node.val + right, left + node.val + right, this.result)
        if (nodePathVal > this.result) this.result = nodePathVal
        return Math.max(0, node.val, node.val + left, node.val + right)
    }
}
