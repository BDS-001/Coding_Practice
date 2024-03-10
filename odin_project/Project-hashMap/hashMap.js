const node = function(key=null, val=null, nextNode=null) {
    return {
        key: key,
        val: val,
        nextNode: nextNode
    }
}

const hashMap = (function() {

    const buckets = []
    const bucketSize = 8
    const loadFactor = bucketSize * 0.75

    function hash(key) {
        let hashCode = 0

        const primeNumber = 31
        for (let i = 0; i < key.length; i++) {
            hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % bucketSize
        }

        return hashCode
    }

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

    return {hash, buckets, set, get, has, remove}
})