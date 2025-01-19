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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        if (!root) return root
        return this.treeToArray(root)[k - 1]
    }

    treeToArray(node) {
        if (!node) return []
        return [...this.treeToArray(node.left), node.val, ...this.treeToArray(node.right)]
    }
}
