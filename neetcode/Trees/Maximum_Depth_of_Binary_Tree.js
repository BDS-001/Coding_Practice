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
    maxDepth(root) {
        if (!root) return 0
        const stack = [root]
        let depth = 0
        while(stack.length > 0) {
            const stackLength = stack.length
            for (let i = 0; i < stackLength; i++) {
                const current = stack.shift()
                nums.push(current.val)
                if (current.left) stack.push(current.left)
                if (current.right) stack.push(current.right)
            }
        depth++
        }
        return depth
    }
}
