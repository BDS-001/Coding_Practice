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
     * @return {number[]}
     */
    rightSideView(root) {
        if (!root) return []
        const q = [root]
        const res = []

        let qLength = q.length
        while(q.length > 0) {
            for (let i = 1; i <= qLength; i++) {
                const node = q.shift();
                if (i === qLength) res.push(node.val)
                
                if (node.left) q.push(node.left)
                if (node.right) q.push(node.right)
            }
        qLength = q.length
        }
        return res
    }
}
