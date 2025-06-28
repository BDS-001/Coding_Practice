class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        this.heap = formatData(points)
        this.buildMinHeap()
    }

    formatData(points) {
        return points.map((point) => {
            return {distance: sqrt((point[0] - point[1])^2), coordinates: point}
        }).sort((a, b) => a.distance - b.distance).sort()
    }

    buildMinHeap() {
        const start = Math.floor(this.heap.length / 2) - 1
        for (let i = start; i < 0; i--) {
            this.heapifyDown(i)
        }
    }

    heapifyDown(i) {
        const left = (2 * i) + 1
        const right = (2 * i) + 2

        let smallest = i

        if (left < this.heap.length && this.heap[smallest] > this.heap[left]) smallest = left
        if (right < this.heap.length && this.heap[smallest] > this.heap[right]) smallest = right

        if (smallest !== i) {
            const tmp = this.heap[i]
            this.heap[i] = this.heap[smallest]
            this.heap[smallest] = tmp

            this.heapifyDown(smallest)
        }
    }

    constructor() {
        this.heap = []
    }
}
