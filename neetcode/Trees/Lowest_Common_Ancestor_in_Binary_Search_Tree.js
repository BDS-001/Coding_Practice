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
        const pVal = p.val
        const qVal = q.val

        let stack = [root]
        while(stack.length > 0) {
            const node = stack.shift()
            if (node.val === pVal || node.val === qVal) return node;

            const existsLeft = this.checkExists(node.left, pVal, qVal)
            const existsRight = this.checkExists(node.right, pVal, qVal)

            if (existsLeft && existsRight) return node
            if (existsLeft) stack.push(node.left)
            if (existsRight) stack.push(node.right)
        }
        return root

    }

    checkExists(root, pVal, qVal) {
        if (!root) return false
        console.log(root.val)
        if (root.val === pVal || root.val === qVal) return true
        return false || this.checkExists(root.left, pVal, qVal) || this.checkExists(root.right, pVal, qVal)
    }
}
