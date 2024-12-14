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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        if (!root && !subRoot) return true
        if (!root || !subRoot) return false

        const stack = [root]
        while(stack.length > 0) {
            const node = stack.shift()
            if (!node) continue

            if (node.val === subRoot.val) {
                if (this.matchingTrees(node, subRoot)) return true
            }
            stack.push(node.left)
            stack.push(node.right)
        }
        return false
    }

    matchingTrees(root, subRoot) {
        if (!root && !subRoot) return true
        if (!root || !subRoot) return false
        return root.val === subRoot.val ? true && this.matchingTrees(root.left, subRoot.left) && this.matchingTrees(root.right, subRoot.right) : false
    }
}
