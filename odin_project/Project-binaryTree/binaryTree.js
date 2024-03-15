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

    buildTree(array) {
        array = this._cleanArray(array)
        const rootIndex = Math.floor(array.length / 2)
        const head = new Node(array[rootIndex])
        
    }
}

const test = new Tree([5,7,8,65,2,67,4,3,234564,56,2342,564,234,654,3])
console.log(test.root)