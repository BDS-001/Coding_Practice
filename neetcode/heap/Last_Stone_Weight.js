/*
╔══════════════════════════════════════════════════════════════════════════════════════════╗
║ Heap Solution                                                                            ║
║ tests passed: 3/28                                                                       ║
╚══════════════════════════════════════════════════════════════════════════════════════════╝
*/
class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */

    constructor() {
        this.heap = null
    }

    lastStoneWeight(stones) {
        this.heap = [...stones]
        this.buildMaxHeap()
        return this.simulate()
    }

    simulate() {
        while(this.heap.length > 1) {
            const stone1 = this.dequeue()
            const stone2 = this.dequeue()

            const val = Math.abs(stone1 - stone2)
            if (val > 0) this.enqueue(val)
        }
        return this.heap.length > 0 ? this.heap[0] : 0
    }

    dequeue() {
        if (!this.heap.length) return null
        const value = this.heap[0]
        const lastElement = this.heap.pop() 
        if (this.heap.length) {
            this.heap[0] = lastElement
            this.heapifyDown(0)
        }
        return value
    }

    enqueue(value) {
        this.heap.push(value);
        this.heapifyUp(this.heap.length - 1);
    }

    buildMaxHeap() {
        const start = Math.floor(this.heap.length / 2) - 1
        for (let i = start; i >= 0; i--) {
            this.heapifyDown(i)
        }
    }

    heapifyDown(i) {
        const left = (2 * i) + 1
        const right = (2 * i) + 2

        let largest = i

        if (left < this.heap.length && this.heap[largest] < this.heap[left]) {
            largest = left
        }

        if (right < this.heap.length && this.heap[largest] < this.heap[right]) {
            largest = right
        }

        if (largest !== i) {
            const temp = this.heap[i]
            this.heap[i] = this.heap[largest]
            this.heap[largest] = temp

            this.heapifyDown(largest)
        }
    }

    heapifyUp(i) {
        if (i === 0) return
        const parent = Math.floor((i - 1) / 2)

        if (this.heap[parent] < this.heap[i]) {
            const tmp = this.heap[parent]
            this.heap[parent] = this.heap[i]
            this.heap[i] = tmp

            this.heapifyUp(parent)
        }
    }
}




/*
╔══════════════════════════════════════════════════════════════════════════════════════════╗
║ Simple Solution                                                                          ║
║ tests passed: 28/28                                                                      ║
╚══════════════════════════════════════════════════════════════════════════════════════════╝
*/
class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        while(stones.length > 1) {
            stones.sort((a, b) => a - b)
            const stone1 = stones.pop()
            const stone2 = stones.pop()
            const remainder = Math.abs(stone1 - stone2)
            if (remainder > 0) stones.push(remainder)
        }
        return stones.length === 0 ? 0 : stones[0]
    }
}