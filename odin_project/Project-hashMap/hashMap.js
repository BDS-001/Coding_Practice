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
    let bucketSize = 8
    let loadFactor = 0.75
    let maxLoad = bucketSize * loadFactor

    //return the hash of a key
    function hash(key) {
        let hashCode = 0

        const primeNumber = 31
        for (let i = 0; i < key.length; i++) {
            hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % bucketSize
        }

        return hashCode
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

    //takes a function and returns a concatenated array
    function _getAllValues(type) {
        let list = []
        for (let i = 0; i < buckets.length; i++) {
            if (buckets[i]) list = list.concat(_getBucketValues(buckets[i], type))
        }
        return list
    }

    function _getBucketValues(pointer, type) {
        let list = [];
        while(pointer) {
            switch(type) {
                case 'keys':
                    list.push(pointer.key);
                    break;
                case 'values':
                    list.push(pointer.val);
                    break;
                case 'entries':
                    list.push([pointer.key, pointer.val]);
                    break;
            }
            pointer = pointer.nextNode;
        }
        return list;
    }

    //returns an array of all the keys in the hashMap
    function keys() {
        return _getAllValues('keys')
    }

    //returns an array of all the values in the hashMap
    function values() {
        return _getAllValues('values')
    }

    function entries() {
        return _getAllValues('entries')
    }

    //automatically resize the hashMap and move the curretn entries
    function _resize() {
        const entries = _getAllValues('entries')
        bucketSize *= 2
        maxLoad = bucketSize * loadFactor
        clear()
        entries.forEach(entry => {
            set(entry[0], entry[1])
        });

    }

    //set a key value pair, if key exists update the value otherwise add it
    function set(key, value) {

        //resize hashMap if entries wil exceed the maxLoad value
        if (length() + 1 >= maxLoad) {
            _resize()
        }

        //if the current key does not exist, add a new node
        const index = hash(key)
        if (!buckets[index]) {
            buckets[index] = node(key, value)
            return
        }

        //if the current key exists, update the value
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
    

    return {hash, set, get, has, remove, length, clear, keys, values, entries}
})
