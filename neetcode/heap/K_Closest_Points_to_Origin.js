class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        this.heap = this.formatData(points)
        this.buildMinHeap()

        for (let i = 0; i < k; i++) {
            const point = this.dequeue()
            this.res.push(point.coordinates)
        }
        return this.res
    }

    dequeue() {
        //save the head
        const res = this.heap[0]

        //remove and save the last element
        const lastVal = this.heap.pop()

        //replace head with the last element
        this.heap[0] = lastVal

        //fix the heap
        this.heapifyDown(0)

        //return the head
        return res
    }

    formatData(points) {
        return points.map((point) => {
            return {distance: Math.sqrt((point[0]**2) + (point[1]**2)), coordinates: point}
        }).sort((a, b) => a.distance - b.distance)
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

        if (left < this.heap.length && this.heap[smallest].distance > this.heap[left].distance) smallest = left
        if (right < this.heap.length && this.heap[smallest].distance > this.heap[right].distance) smallest = right

        if (smallest !== i) {
            const tmp = this.heap[i]
            this.heap[i] = this.heap[smallest]
            this.heap[smallest] = tmp

            this.heapifyDown(smallest)
        }
    }

    constructor() {
        this.heap = []
        this.res = []
    }
}
