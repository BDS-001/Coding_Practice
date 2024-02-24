class Node {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

function insertNode(root, node) {
    if (node.val < root.val) {
        if (root.left === null) {
            root.left = node
        } else {
            insertNode(root.left, node)
        }
    } else {
        if (root.right === null) {
            root.right = node
        } else {
            insertNode(root.right, node)
        }
    }
}

function tree(array) {

    const myTree = new Node(array[0])

    for (let index = 1; index < array.length; index++) {
        const newNode = new Node(array[index])
        insertNode(myTree, newNode)
    }

    console.log(myTree)
}

const myArray = [5,7,1,15,9,2,14,8,7,3]
tree(myArray)