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
        const stack = [[root]]
        let prev = -1
        let current = stack.length - 1
        while(prev !== current) {
            prev = current
            const level = []
            const currLevel = stack[current]
            for (let i = 0; i < currLevel.length; i++) {
                const node = currLevel[i]
                if (node.left) level.push(node.left)
                if (node.right) level.push(node.right)
            }
            if(level.length > 0) stack.push(level)
            current = stack.length - 1
            
        }
    }
}
