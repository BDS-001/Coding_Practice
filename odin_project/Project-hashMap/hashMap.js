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

    function checkIndex(index) {
        if (index < 0 || index >= buckets.length) {
            throw new Error("Trying to access index out of bound");
            }
    }

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
        while (pointer.nextNode) {
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

    return {hash, buckets, set}
})();


console.log(hashMap.hash('james'))
console.log(hashMap.hash('harold'))
console.log(hashMap.hash('rigamaroll'))
console.log(hashMap.hash('thisisjustatesttoseewhatigetfromthis'))
console.log(hashMap.hash('nit'))
console.log(hashMap.hash('fgds'))
console.log(hashMap.hash('dghgrtrh'))