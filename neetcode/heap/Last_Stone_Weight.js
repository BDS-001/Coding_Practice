/*
╔══════════════════════════════════════════════════════════════════════════════════════════╗
║ Heap Solution                                                                            ║
║ tests passed: 0/28                                                                       ║
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