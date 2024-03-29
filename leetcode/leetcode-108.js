/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    if (nums.length < 1) return null
    const center = Math.floor(nums.length / 2)
    const head = new TreeNode(nums[center])
    head.left = sortedArrayToBST(nums.slice(0, center))
    head.right = sortedArrayToBST(nums.slice(center + 1, nums.length))
    return head
};