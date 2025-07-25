class Solution {
    /**
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */
    constructor() {
        this.taskHeap = []
    }

    leastInterval(tasks, n) {
        this.setupTaskHeap(tasks)
        return this.simulateCycles(n)
    }

    setupTaskHeap(tasks) {
        const countMap = tasks.reduce((map, curr) => {
            map.set(curr, (map.get(curr) || 0) + 1)
        }, new Map())

        formattedTasks = Object.entries(countMap).map(([key, val]) => {
            return {val: key, count: val, nextCycle: 0}
        })

        this.taskHeap = formattedTasks
    }

    simulateCycles(n) {
        let cycles = 0
        while(this.taskHeap.length) {
            const task = this.taskHeap[0]
            if (task.nextCycle > n) cycles += task.nextCycle - cycles
            task.count -= 1
            this.heapifyDown(0)
        }
        return cycles
    }

    heapifyDown(i) {
        const left = (2 * i) + 1
        const right = (2 * i) + 2

        let smallest = i

        if (left < this.taskHeap.length && this.taskHeap[smallest].nextCycle > this.taskHeap[left].nextCycle) {
            smallest = left
        }

        if (right < this.taskHeap.length && this.taskHeap[smallest].nextCycle > this.taskHeap[right].nextCycle) {
            smallest = right
        }

        if (smallest !== i) {
            const tmp = this.taskHeap[i]
            this.taskHeap[i] = this.taskHeap[smallest]
            this.taskHeap[smallest] = tmp
            this.heapifyDown(smallest)
        }
    }

    heapifyUp(i) {
        if (i === 0) return
        const parent = Math.floor((i - 1) / 2)

        if (this.taskHeap[i].nextCycle < this.taskHeap[parent].nextCycle) {
            const tmp = this.taskHeap[i]
            this.taskHeap[i] = this.taskHeap[parent]
            this.taskHeap[parent] = tmp
            this.heapifyUp(parent)
        }
    }

    enqueue(value) {
        this.taskHeap.push(value);
        this.heapifyUp(this.taskHeap.length - 1);
    }
}
