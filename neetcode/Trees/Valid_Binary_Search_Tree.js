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
    isValidBST(root) {
        return this.validNode(root, -Infinity, Infinity)
    }

    validNode(node, min, max) {
        if (!node) return true

        if (node.val <= min || node.val >= max) {
            return false
        }

        return this.validNode(node.left, min, node.val) && this.validNode(node.right, node.val, max)
    }
}
