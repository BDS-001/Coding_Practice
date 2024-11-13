class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity
        this.map = new Map()
    }

    removeLRU() {
        const key = this.map.keys().next().value
        this.map.delete(key)
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        //check if value exists
        const val = this.map.get(key)
        console.log(val, key)
        if (val === undefined) return -1

        //reset position, then return value
        this.map.delete(key)
        this.map.set(key, val)
        return val
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        const exists = this.map.get(key)
        if (this.map.size >= this.capacity && !exists) this.removeLRU()
        if (exists !== undefined) this.map.delete(key)
        this.map.set(key, value)
    }
}