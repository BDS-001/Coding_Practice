const node = (function (val=null, nextNode=null) {
    return {
        value: val,
        nextNode: nextNode
    }
})

const linkedList = (function() {
    let list = null

    function append(val) {
        if (!list) {
            list = node(val)
        } else {
            let pointer = list
            while (pointer) {
                if (pointer.nextNode) {
                    pointer = pointer.nextNode;
                } else {
                    pointer.nextNode = node(val);
                    break;
                }
            }
        }
    }

    function prepend(val) {
        if (!list) {
            list = node(val)
        } else {
            let newNode = node(val)
            newNode.nextNode = list
            list = newNode
        }
    }

    function size() {
        let size = 0
        let pointer = list
        while (pointer) {
            size += 1
            pointer = pointer.nextNode
        }
        return size
    }

    function head() {
        return list
    }

    function tail() {
        let pointer = list
        while (pointer.nextNode) {
            pointer = pointer.nextNode
        }

        return pointer
    }

    function at(index) {
        if (index + 1 > size()) return null
        let pointer = list
        for (let i = 0; i < index; i++) {
            pointer = pointer.nextNode
        }
        return pointer
    }

    function pop() {
        let pointer = list
        let prevPointer = null

        while(pointer.nextNode) {
            prevPointer = pointer
            pointer = pointer.nextNode
        }

        prevPointer.nextNode = null
        return pointer
    }

    function contains(val) {
        let pointer = list
        while (pointer) {
            if (pointer.value === val) return true
            pointer = pointer.nextNode
        }
        return false
    }

    function find(val) {
        let pointer = list
        index = 0
        for (let index = 0; pointer; index++) {
            if (pointer.value === val) return index
            pointer = pointer.nextNode
        }
        return null
    }

    function toString() {
        let str = ''
        let pointer = list
        while (pointer) {
            str += `( ${pointer.value} ) -> `
            pointer = pointer.nextNode
        }

        str += 'null'
        return str
    }

    function removeAt(index) {
        if (index + 1 > size()) return null
        let prevPointer = null
        let pointer = list
        for (let i = 0; i < index; i++) {
            prevPointer = pointer
            pointer = pointer.nextNode
        }

        prevPointer.nextNode = pointer.nextNode
    }

    function insertAt(val, index) {
        if (index + 1 > size()) return null
        let prevPointer = null
        let pointer = list
        for (let i = 0; i < index; i++) {
            prevPointer = pointer
            pointer = pointer.nextNode
        }

        prevPointer.nextNode = node(val, pointer)
    }

    return {append, prepend, size, head, tail, at, pop, contains, find, toString, removeAt, insertAt}
})


const test = linkedList()
test.append(3)
test.append(6)
test.append(9)
test.prepend(190)
// console.log(test.size())
// console.log(test.head())
// console.log(test.tail())
// console.log('at 0', test.at(0))
// console.log('at 3', test.at(3))
// console.log(test.pop())
// console.log(test.contains(6))
// console.log(test.contains(2))
// console.log(test.find(6))
// console.log(test.find(40))
console.log(test.toString())
test.removeAt(2)
console.log(test.toString())
test.insertAt(4535, 1)
console.log(test.toString())