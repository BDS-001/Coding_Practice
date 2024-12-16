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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
    lowestCommonAncestor(root, p, q) {
        if (!root) return
        let left = false
        let right = false
        let stack = [root]
        while(!(left && right) && stack.length > 0) {
            const node = stack.shift()
            const existsLeft = this.checkExists(node.left, p.val, q.val)
            const existsRight = this.checkExists(node.right, p.val, q.val)

            if (existsLeft && existsRight) return node
            if (existsLeft) stack.push(root.left)
            if (existsRight) stack.push(root.right)
        }

    }

    checkExists(root, p, q) {
        if (!root) return false
        if (root.val === p || root.val === q) return true
        return false || this.checkExists(root.left, p, q) || this.checkExists(root.right, p, q)
    }
}
