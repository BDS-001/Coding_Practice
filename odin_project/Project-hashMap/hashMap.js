// nodes used for bucket linked lists
const node = function(key=null, val=null, nextNode=null) {
    return {
        key: key,
        val: val,
        nextNode: nextNode
    }
}

// hashMap factory function
const hashMap = (function() {
    const buckets = []
    const bucketSize = 8
    const loadFactor = bucketSize * 0.75

    //return the hash of a key
    function hash(key) {
        let hashCode = 0

        const primeNumber = 31
        for (let i = 0; i < key.length; i++) {
            hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % bucketSize
        }

        return hashCode
    }

    //set a key value pair, if key exists update the value otherwise add it
    function set(key, value) {
        const index = hash(key)
        if (!buckets[index]) {
            buckets[index] = node(key, value)
            return
        }

        let pointer = buckets[index]
        while (pointer.nextNode || pointer.key === key) {
            if (pointer.key === key) {
                pointer.val = value
                return
            }
            pointer = pointer.nextNode
        }
        pointer.nextNode = node(key, value)
    }

    //returns the value when given the key
    function get(key) {
        const index = hash(key)
        if (!buckets[index]) return null

        let pointer = buckets[index]
        while (pointer) {
            if (pointer.key === key) return pointer.val
            pointer = pointer.nextNode
        }
        return null
    }

    //returns true if the key exists within the hashMap, otherwise return false
    function has(key){
        const index = hash(key)
        if (!buckets[index]) return false

        let pointer = buckets[index]
        while (pointer) {
            if (pointer.key === key) return true
            pointer = pointer.nextNode
        }
        return false
    }

    //given the key, remove the node from the link lists
    function remove(key) {
        const index = hash(key)
        if (!buckets[index]) return
        let pointer = buckets[index]
        if (pointer.key === key) buckets[index] = pointer.nextNode

        let prevNode = pointer
        pointer = pointer.nextNode 
        while (pointer) {
            if (pointer.key === key) {
                prevNode.nextNode = pointer.nextNode
                return
            }
        prevNode = pointer
        pointer = pointer.nextNode
        }
    }

    //helper function to get the length of a bucket
    function _bucketLength(pointer) {
        let length = 0
        while(pointer) {
            length += 1
            pointer = pointer.nextNode
        }
        return length
    }

    //returns the total number of values in the hashMap
    function length() {
        let length = 0
        for (let i = 0; i < buckets.length; i++) {
            if (buckets[i]) length += _bucketLength(buckets[i])
        }
        return length
    }

    //clears the hashMap by removing all values
    function clear() {
        for (let i = 0; i < buckets.length; i++) {
            if (buckets[i]) buckets[i] = null
        }
    }

    //returns the keys within a given bucket
    function _getKeys(pointer) {
        let keysList = []
        while(pointer) {
            keysList.push(pointer.key)
            pointer = pointer.nextNode
        }
        return keysList
    }

    //returns an array of all the keys in the hashMap
    function keys() {
        let keysList = []
        for (let i = 0; i < buckets.length; i++) {
            if (buckets[i]) keys += _getKeys(buckets[i])
        }
        return keysList
    }

    return {hash, buckets, set, get, has, remove, length, clear, keys}
})



//tests
const test = hashMap()
test.set('name', 'Alice')
test.set('age', 30)
test.set('is_student', true)
test.set('score', 95.5)
test.set('score', 100)
test.set('treteg', 6756)
test.set('fgtrh', 564)


console.log(test.buckets)
console.log(test.get('tesfdsf'))
console.log(test.get('age'))
console.log(test.has('tesfdsf'))
console.log(test.has('age'))
test.remove('age')

console.log(test.buckets)