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
    if (!root) return true
    function height(start) {
        if (!start) return 0
        let queue = [start]
        let nodeDistance = 0

        while (queue.length > 0) {
            let levelSize = queue.length
            for (let i = 0; i < levelSize; i++) {
                let currentNode = queue.shift()

                if (currentNode.left) queue.push(currentNode.left)
                if (currentNode.right) queue.push(currentNode.right)
            }
            nodeDistance ++;
        }
        return nodeDistance
    }

    const queue = [root]
    let levelSize = queue.length
    while(queue.length > 0) {
        for (let i = 0; i < levelSize; i++) {
            let currentNode = queue.shift()
            const leftHeight = height(currentNode.left)
            const rightHeight = height(currentNode.right)
            console.log(currentNode.val, leftHeight, rightHeight)
            if (Math.abs(leftHeight - rightHeight) > 1) return false
            if (currentNode.left) queue.push(currentNode.left)
            if (currentNode.right) queue.push(currentNode.right)
        }
    }
    return true
};