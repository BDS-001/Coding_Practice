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
     * @return {boolean}
     */
    isBalanced(root) {
        if (!root) return true
        const leftLength = this.nodeLength(root.left)
        const rightLength = this.nodeLength(root.right)
        if (Math.abs(leftLength - rightLength) > 1) return false
        return true && this.isBalanced(root.left) && this.isBalanced(root.right)
    }

    nodeLength(node) {
        if (!node) return 0
        return 1 + Math.max(this.nodeLength(node.left), this.nodeLength(node.right))
    }
}
