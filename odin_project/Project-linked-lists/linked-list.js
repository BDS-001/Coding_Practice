const node = (function (val=null) {
    return {
        value: val,
        nextNode: null
    }
})

const linkedList = (function() {
    let list = null
    let size = 0

    function append(val) {
        if (!list) {
            list = node(val)
        } else {
            let pointer = list
            while (pointer) {
                pointer.nextNode ? pointer = pointer.nextNode : pointer.nextNode = node(val)
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
        const pointer = list
        while (pointer) {
            size += 1
            pointer = pointer.nextNode
        }
        return size
    }

    function head() {
        return list
    }
})