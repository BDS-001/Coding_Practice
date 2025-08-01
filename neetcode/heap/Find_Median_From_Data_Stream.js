class MedianFinder {
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
        this.heapifyUp(this.maxHeap, this.maxHeap.length - 1, (a, b) => a > b)

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
}
