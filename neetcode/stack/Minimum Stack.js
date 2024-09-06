class MinStack {
    constructor() {
        this.min = []
        this.stack = []
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.unshift(val)
        this.min.unshift(Math.min(val, this.min.length === 0 ? val : this.min[0]))
    }

    /**
     * @return {void}
     */
    pop() {
        this.stack.shift()
        this.min.shift()
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[0]
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.min[0]
    }
}
