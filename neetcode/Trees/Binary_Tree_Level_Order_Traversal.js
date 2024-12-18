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
     * @return {number[][]}
     */
    levelOrder(root) {
        if(!root) return []
        const stack = [root]
        const res = []
        while(stack.length > 0) {
            const stackLength = stack.length
            const level = []
            for (let i = 0; i < stackLength; i++) {
                const node = stack.shift()
                level.push(node.val)
                if (node.left) {
                    stack.push(node.left)
                }
                if (node.right) {
                    stack.push(node.right)
                }
            }
            res.push(level)
        }
        return res
    }
}
