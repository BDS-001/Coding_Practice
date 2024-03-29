/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    if ((q.val != p.val)) return false

    const pQueue = [p]
    const qQueue = [q]

    while (pQueue.length > 0 && qQueue.length > 0) {
        const currentP = pQueue.shift()
        const currentQ = qQueue.shift()
        if ((!currentP.left && currentQ.left) || (currentP.left && !currentQ.left)) return false;
        if ((!currentP.right && currentQ.right) || (currentP.right && !currentQ.right)) return false;
        
        if (currentP.left) {
            if (currentP.left.val != currentQ.left.val) return false
            pQueue.push(currentP.left)
            qQueue.push(currentQ.left)
        }
        if (currentP.right) {
            if (currentP.right.val != currentQ.right.val) return false
            pQueue.push(currentP.right)
            qQueue.push(currentQ.right)
        }

    }
    return true
};