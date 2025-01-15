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
    goodNodes(root) {
        if (root) {
            return this.goodNodeCount(root, -Infinity)
        }
        return 0
    }

    goodNodeCount(node, max) {
        let [good, left, right] = [0,0,0]
        if (node.val >= max) good = 1
        if (node.right) right = this.goodNodeCount(node.right, Math.max(max, node.val))
        if (node.left) left = this.goodNodeCount(node.left, Math.max(max, node.val))
        return good + left + right
    }
}
