const hashMap = function() {

    function checkIndex(index) {
        if (index < 0 || index >= buckets.length) {
            throw new Error("Trying to access index out of bound");
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
    return {}
}