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
    maxLength(root) {
        if (!root) return 0
        return 1 + Math.max(this.maxLength(root.left), this.maxLength(root.right))
    }

    diameterOfBinaryTree(root) {
        if (!root) return 0

        const leftMax = this.maxLength(root.left)
        const rightMax = this.maxLength(root.right)
        const rootDiameter = leftMax + rightMax
        const sub = Math.max(this.diameterOfBinaryTree(root.left), this.diameterOfBinaryTree(root.right))
        return Math.max(rootDiameter, sub)
    }
}
