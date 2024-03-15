const node = function(data=null, left=null, right=null) {
    return {
        data: data,
        left: left,
        right: right,
    }
}

class Tree {
    constructor(array) {
        this.tree = this.buildTree(array)
        this.root = null
    }

    _cleanArray(array) {
        array.sort((a, b) => a - b);
        return [...new Set(array)] 
    }

    buildTree(array) {
        array = this._cleanArray(array)
        return array
    }
}

const test = new Tree([5,7,8,65,2,67,4,3,234564,56,2342,564,234,654,3])
console.log(test.tree)