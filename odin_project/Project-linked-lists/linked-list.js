const node = (function (val=null) {
    return {
        value: val,
        nextNode: null
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
        if (index + 1 > size()) return -1
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
        console.log(pointer)
        console.log()
        console.log(list)
        console.log()
        console.log(prevPointer)
        return pointer
    }

    return {append, prepend, size, head, tail, at, pop}
})


const test = linkedList()
test.append(3)
test.append(6)
test.append(9)
test.prepend(190)
console.log(test.size())
console.log(test.head())
console.log(test.tail())
console.log('at 0', test.at(0))
console.log('at 3', test.at(3))
console.log(test.pop())