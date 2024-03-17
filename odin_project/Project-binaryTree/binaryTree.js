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

    deleteItem(val) {
        const [parent, child] = this._getParentChildPair(val)
        //if the value is not in the tree, return null
        if (!child) return null

        if (!child.left && !child.right && this.root.val === val) {
            //if the tree only has one value, set root to null
            this.root = null
        } else if(!child.left && !child.right && parent.node) {
            //if the child is not root and the child is a leaf node, remove the leaf node
            if (parent.direction === 'left') {
                parent.node.left = null
            } else {
                parent.node.right = null
            }
        }

    }
}

const test = new Tree([5,7,8,65,2,67,4,3,234564,56,2342,564,234,654,3])
console.log(test.root)
prettyPrint(test.root)
console.log(test._rootSet, test.root)
prettyPrint(test.find(234))
prettyPrint(test.find(5))
console.log(test.find(42))