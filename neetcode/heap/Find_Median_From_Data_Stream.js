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
        this.enqueue(this.maxHeap, num, 'max')
        this.enqueue(this.minHeap, this.dequeue(this.maxHeap, 'max'), 'min')

        if(this.maxHeap.length < this.minHeap.length) {
            const value = this.dequeue(this.minHeap, 'min')
            this.enqueue(this.maxHeap, value, 'max')
        }
    }

    /**
     * @return {number}
     */
    findMedian() {
        const length = this.minHeap.length + this.maxHeap.length
        return length % 2 === 0 ? (this.minHeap[0] + this.maxHeap[0]) / 2 : this.maxHeap[0]
    }

    heapifyUp(heap, i, compare) {
        if (i === 0) return
        const parent = Math.floor((i - 1) / 2)

        if (compare(heap[i], heap[parent])) {
            [heap[i], heap[parent]] = [heap[parent], heap[i]]
            this.heapifyUp(heap, parent, compare)
        }
    }

    heapifyDown(heap, i, compare) {
        if (heap.length <= 1) return
        
        const left = (2 * i) + 1
        const right = (2 * i) + 2

        let significantVal = i

        if (left < heap.length && compare(heap[left], heap[significantVal])) {
            significantVal = left
        }

        if (right < heap.length && compare(heap[right], heap[significantVal])) {
            significantVal = right
        }

        if (significantVal !== i) {
            [heap[i], heap[significantVal]] = [heap[significantVal], heap[i]]
            this.heapifyDown(heap, significantVal, compare)
        }
    }

    dequeue(heap, heapType) {
        if (!heap.length) return null
        
        const value = heap[0]
        heap[0] = heap[heap.length - 1]
        heap.pop()
        this.heapifyDown(heap, 0, this.compare[heapType])
        
        return value
    }

    enqueue(heap, value, heapType) {
        heap.push(value);
        this.heapifyUp(heap, heap.length - 1, this.compare[heapType]);
    }
}

