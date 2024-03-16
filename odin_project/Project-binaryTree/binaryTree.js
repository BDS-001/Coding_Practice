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
}

const test = new Tree([5,7,8,65,2,67,4,3,234564,56,2342,564,234,654,3])
console.log(test.root)
prettyPrint(test.root)
console.log(test._rootSet, test.root)
prettyPrint(test.find(234))
prettyPrint(test.find(5))
console.log(test.find(42))