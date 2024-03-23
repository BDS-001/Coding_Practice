const prettyPrint = (node, prefix = "", isLeft = true) => {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.val}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  };

class Node {
    constructor(val=null, left=null, right=null) {
        this.val = val
        this.left = left
        this.right = right
    }
}

class Tree {
    constructor(array) {
        this.root = this.buildTree(array)
    }

    _cleanArray(array) {
        array.sort((a, b) => a - b);
        return [...new Set(array)] 
    }

    _buildBranches(array) {
        if (array.length < 1) return null
        const center = Math.floor(array.length / 2)
        const head = new Node(array[center])
        head.left = this._buildBranches(array.slice(0, center))
        head.right = this._buildBranches(array.slice(center + 1, array.length))
        return head
    }

    buildTree(array) {
        array = this._cleanArray(array)
        this._rootSet = true
        return this._buildBranches(array)
    }

    find(val) {
        let pointer = this.root
        while (pointer) {
            if (pointer.val === val) return pointer
            if (val < pointer.val){
                pointer = pointer.left
            } else if (val > pointer.val){
                pointer = pointer.right
            }
        }
        return null
    }

    insert(val) {
        let pointer = this.root
        while (pointer) {
            //if value is already in the tree, return null
            if (pointer.val === val) return null

            //if the value is less than the current node, continue on the left side
            if (val < pointer.val){
                if (!pointer.left) {
                    pointer.left = new Node(val)
                } else {
                    pointer = pointer.left
                }
            //if the value is greater than the current node, continue on the right side
            } else if (val > pointer.val){
                if (!pointer.right) {
                    pointer.right = new Node(val)
                } else {
                    pointer = pointer.right
                }
            }
        }
    }

    //return the parent child pair of nodes with the direction
    _getParentChildPair(val){
        let child = this.root
        let parent = {node:null, direction:null}
        while (child) {
            if (child.val === val) break

            parent.node = child
            if (val < child.val) {
                parent.direction = 'left'
                child = child.left
            } else {
                parent.direction = 'right'
                child = child.right
            }
        }
        return[parent, child]
    }

    _getReplacementParentChild(node) {
        //move one node to the right then find the left most node
        let replacementParent = node
        let repalcementChild = node.right
        while(repalcementChild.left) {
            replacementParent = repalcementChild
            repalcementChild = repalcementChild.left
        }
        return [replacementParent, repalcementChild]
    }

    deleteItem(val) {
        const [parent, child] = this._getParentChildPair(val)
        //if the value is not in the tree, return null
        if (!child) return null

        if (!child.left && !child.right && this.root.val === val) {
            //if the tree only has one value, set root to null
            this.root = null
        } else if(!child.left && !child.right && parent.node) {
            //if the child is not root and the child is a leaf node, remove the leaf node
            parent.direction === 'left' ? parent.node.left = null : parent.node.right = null

        } else if ((!child.left && child.right) || (child.left && !child.right)) {
            //if the node only has one branch, replace the node wth the branch

            if (child.right) {
                //set the child equal to the right branch node
                parent.direction === 'left' ? parent.node.left = child.right : parent.node.right = child.right
            } else if (child.left) {
                //set the child equal to the left branch node
                parent.direction === 'left' ? parent.node.left = child.left : parent.node.right = child.left
            }
        } else if (child.left && child.right) {
            //if the node has 2 child nodes, find the next highest value and replace the value then remove the swapped node
            const [replacementParent, repalcementChild] = this._getReplacementParentChild(child)
            console.log(replacementParent.val, repalcementChild.val)
            child.val = repalcementChild.val
            replacementParent.left = repalcementChild.right
        }
        prettyPrint(this.root)
    }

    levelOrder(callback=null) {
        if (!this.root) return [];

        let queue = [this.root];
        let result = [];

        while (queue.length > 0) {
            let currentNode = queue.shift();
            if (callback) {
                callback(currentNode);
            } else {
                result.push(currentNode.val);
            }

            if (currentNode.left) queue.push(currentNode.left);
            if (currentNode.right) queue.push(currentNode.right);
        }

        return callback ? null : result;
    }

    _nodeDistance(start, end=null) {
        if (!start) return -1
        let queue = [start]
        let nodeDistance = 0

        while (queue.length > 0) {
            let levelSize = queue.length
            for (let i = 0; i < levelSize; i++) {
                let currentNode = queue.shift()

                if (end && currentNode.val === end.val) return nodeDistance
                if (currentNode.left) queue.push(currentNode.left)
                if (currentNode.right) queue.push(currentNode.right)
            }
            nodeDistance ++;
        }
        return nodeDistance - 1
    }

    height(node) {
        return this._nodeDistance(node)
    }

    depth(node) {
        return this._nodeDistance(this.root, node)
    }

    rebalance() {
        this.root = this.buildTree(this.levelOrder())
    }

    isBalanced() {
        const queue = [this.root]
        let levelSize = queue.length
        while(queue.length > 0) {
            for (let i = 0; i < levelSize; i++) {
                let currentNode = queue.shift()
                if (Math.abs(this.height(currentNode.left) - this.height(currentNode.right)) > 1) return false
                if (currentNode.left) queue.push(currentNode.left)
                if (currentNode.right) queue.push(currentNode.right)
            }
        }
        return true
    }

    isBalancedRecursive() {
        //recursive function that returns -1 if the tree is not balanced
        function checkBalance(node) {
            //base case, no more nodes
            if (node === null) return 0

            //recursively call function to check for height differences
            const leftHeight = checkBalance(node.left)
            const rightHeight = checkBalance(node.right)

            //if any branch is not balanced return -1, otherwise check if the level difference is greater than one
            if (leftHeight === -1 || rightHeight === -1 || Math.abs(leftHeight - rightHeight) > 1) return -1

            //the hieght of the parent node is the length of the longest path, add 1 o go to the next level
            return Math.max(leftHeight, rightHeight) + 1
        }

        //return a boolean value
        return checkBalance(this.root) != -1
    }
}


const test = new Tree([5,7,8,65,2,67,4,3,234564,56,2342,564,234,654,3])
// console.log(test.root)
// prettyPrint(test.root)
// console.log(test._rootSet, test.root)
// prettyPrint(test.find(234))
// prettyPrint(test.find(5))
// console.log(test.find(42))
// test.deleteItem(2)
// test.deleteItem(3)
// test.deleteItem(65)
prettyPrint(test.root)
console.log(test.height(test.find(65)))
console.log(test.depth(test.find(3)))
prettyPrint(test.root)
console.log(test.isBalanced())
console.log(test.isBalancedRecursive())
test.deleteItem(2)
test.deleteItem(4)
prettyPrint(test.root)
console.log(test.isBalanced())
console.log(test.isBalancedRecursive())
test.deleteItem(3)
prettyPrint(test.root)
console.log(test.isBalanced())
console.log(test.isBalancedRecursive())