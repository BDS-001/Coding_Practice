class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */

    constructor() {
        this.heap = [0]
    }

    getHeapSize() {
        return this.heap.length - 1
    }

    lastStoneWeight(stones) {
        this.generateMaxHeap(stones)
        return this.simulate()
    }

    generateMaxHeap(stones) {
        //sort stones in descending order
        stones.sort((a,b) => b - a)

        //return an array starting at index 1 to follow heap logic
        //left: 2*i
        //right: 2*i + 1
        this.heap = [0, ...stones]
    }

    getSecondStone() {
        if (this.getHeapSize() === 2) {
            return { value: this.heap[2], index: 2 }
        }
        return this.heap[2] > this.heap[3] 
            ? { value: this.heap[2], index: 2 } 
            : { value: this.heap[3], index: 3 }
    }

    simulate() {
        while(this.getHeapSize() > 1) {
            const stone1 = this.heap[1]
            const stone2 = this.getSecondStone()

            this.heap[1] = Math.abs(stone1 - stone2.value)
            this.heap[stone2.index] = 0

            this.heapify(1)
            this.removeLeaves()
        }
        return this.heap[this.getHeapSize()]
    }

    removeLeaves() {
        const start = Math.floor((this.getHeapSize() / 2) + 1)
        this.heap = this.heap.filter((stone, i) => {
            if (i < start) return true
            return stone > 0 ? true : false
        })
    }

    heapify(i) {
        const left = i*2
        const right = i*2 + 1

        let largest = i

        if (left < this.getHeapSize() && this.heap[left] > this.heap[i]) {
            largest = left
        }

        if (right < this.getHeapSize() && this.heap[right] > this.heap[i]) {
            largest = right
        }

        if (largest !== i) {
            const tmp = this.heap[i]
            this.heap[i] = this.heap[largest]
            this.heap[largest] = tmp

            this.heapify(left)
            if (right < this.getHeapSize()) this.heapify(right)
        }
    }
}