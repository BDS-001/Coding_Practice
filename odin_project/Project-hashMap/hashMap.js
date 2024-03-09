const node = function(key=null, val=null, nextNode=null) {
    return {
        key: key,
        val: val,
        nextNode: nextNode
    }
}

const hashMap = (function() {

    const buckets = []

    function checkIndex(index) {
        if (index < 0 || index >= buckets.length) {
            throw new Error("Trying to access index out of bound");
            }
    }

    function setBucketsSize(size) {
        for (let i = 0; i < size; i++) {
            buckets.push(node(i))
        }
    }

    function hash(key) {
        let hashCode = 0

        const primeNumber = 31
        for (let i = 0; i < key.length; i++) {
            hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % 10
        }

        return hashCode
    }

    function set(key, value) {
        
    }

    return {hash, container}
})();


console.log(hashMap.hash('james'))
console.log(hashMap.hash('harold'))
console.log(hashMap.hash('rigamaroll'))
console.log(hashMap.hash('thisisjustatesttoseewhatigetfromthis'))
console.log(hashMap.hash('nit'))
console.log(hashMap.hash('fgds'))
console.log(hashMap.hash('dghgrtrh'))