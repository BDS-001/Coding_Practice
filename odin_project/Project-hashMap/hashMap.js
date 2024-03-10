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
        } else {
            const bucket = buckets[index]
            let pointer = bucket
            while (true) {
                if (pointer.nextNode) {
                    pointer = pointer.nextNode
                } else {
                    pointer.nextNode = node(key, value)
                }
            }
        }
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