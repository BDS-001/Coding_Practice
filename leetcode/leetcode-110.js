/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    let balanced = true
    const getHeight = function(node) {
        if (!node || !balanced) return 0

        const leftHeight = getHeight(node.left)
        const rightHeight = getHeight(node.right)

        if (Math.abs(leftHeight - rightHeight) > 1) {
            balanced = false
        }
        return Math.max(leftHeight, rightHeight) + 1
    }
    getHeight(root, 0)
    return balanced
};