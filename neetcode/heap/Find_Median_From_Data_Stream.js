class MedianFinder {
    compare = {
        'min': (a, b) => a < b,
        'max': (a, b) => a > b
    }

    constructor() {
        this.maxHeap = []
        this.minHeap = []
    }

    /**
     *
     * @param {number} num
     * @return {void}
     */
    addNum(num) {
        this.maxHeap.push(num)
        this.heapifyUp(this.maxHeap, this.maxHeap.length - 1, this.compare.max)

        if(this.maxHeap.length - this.minHeap.length > 1) {
            this.minHeap.push(this.maxHeap.shift())
            this.heapifyUp(this.minHeap, this.minHeap.length - 1, this.compare.min)
        }

    }

    /**
     * @return {number}
     */
    findMedian() {}

    heapifyUp(heap, i, compare) {
        while(i > 0) {
            const parentIndex = Math.floor((i - 1) / 2);
            if (!compare(heap[i], heap[parentIndex])) break
            [heap[i], heap[parentIndex]] = [heap[parentIndex], heap[i]]
            i = parentIndex
        }
    }

    heapifyDown(heap, i, compare) {

    }

    dequeue(heap, heapType) {
        if (!heap.length) return null
        [heap[0], heap[heap.length - 1]] = [heap[heap.length - 1], heap[0]]
        const value = heap.pop()
        this.heapifyDown(heap, 0, this.compare[heapType])
        return value
    }

    enqueue(heap, value, heapType) {
        heap.push(value);
        this.heapifyUp(heap, heap.length - 1, this.compare[heapType]);
    }
}
