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

    return {append, prepend, size, head, tail}
})


const test = linkedList()
test.append(3)
test.append(6)
test.append(9)
test.prepend(190)
console.log(test.size())
console.log(test.head())
console.log(test.tail())