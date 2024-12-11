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
     * @return {TreeNode}
     */
    invertTree(root) {
        if (!root) return root
        const queue = [root]

        while(queue.length > 0) {
            const currentNode = queue.pop()
            const left = currentNode.left
            const right = currentNode.right

            currentNode.left = right
            currentNode.right = left

            if (left) queue.push(left)
            if (right) queue.push(right)
        }
    return root
    }
}
