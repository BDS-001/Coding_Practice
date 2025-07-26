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
        return this.taskHeap.length > 0 ? this.simulateCycles(n) : 0
    }

    setupTaskHeap(tasks) {
        //count occurrence of each task
        const countMap = tasks.reduce((map, curr) => {
            return map.set(curr, (map.get(curr) || 0) + 1)
        }, new Map())

        //convert count map to array of task objects
        const taskObjects = [...countMap.entries()].map(([task, count]) => ({task, count}))
        
        //set task heap to task objects and heapify as max heap
        this.taskHeap = taskObjects
        this.heapify()
    }

    heapify() {
        const start = Math.floor(this.taskHeap.length / 2) - 1
        for (let i = start; i >= 0; i--) {
            this.heapifyDown(i)
        }
    }

    simulateCycles(n) {
        let cycles = 0
        let queue = []

        while(queue.length > 0 || this.taskHeap.length > 0) {
            //check for queue timing
            if (queue.length > 0 && queue[0].time <= cycles) {
                const waitingTask = queue.shift()
                this.enqueue(waitingTask.task)
            
            }

            //check for available tasks
            const task = this.dequeue()
            if (task) {
                task.count -= 1
                if (task.count > 0) queue.push({task, time:cycles + n + 1})
            }
            cycles++
        }
        
        return cycles
    }

    heapifyDown(i) {
        const left = (2 * i) + 1
        const right = (2 * i) + 2

        let largest = i

        if (left < this.taskHeap.length && this.taskHeap[left].count > this.taskHeap[largest].count) {
            largest = left
        }

        if (right < this.taskHeap.length && this.taskHeap[right].count > this.taskHeap[largest].count) {
            largest = right
        }

        if (largest !== i) {
            const tmp = this.taskHeap[i]
            this.taskHeap[i] = this.taskHeap[largest]
            this.taskHeap[largest] = tmp
            this.heapifyDown(largest)
        }
    }

    heapifyUp(i) {
        if (i === 0) return
        const parent = Math.floor((i - 1) / 2)

        if (this.taskHeap[i].count > this.taskHeap[parent].count) {
            const tmp = this.taskHeap[i]
            this.taskHeap[i] = this.taskHeap[parent]
            this.taskHeap[parent] = tmp
            this.heapifyUp(parent)
        }
    }


    dequeue() {
        if (!this.taskHeap.length) return null
        const value = this.taskHeap[0]
        const lastElement = this.taskHeap.pop() 
        if (this.taskHeap.length) {
            this.taskHeap[0] = lastElement
            this.heapifyDown(0)
        }
        return value
    }

    enqueue(value) {
        this.taskHeap.push(value);
        this.heapifyUp(this.taskHeap.length - 1);
    }
}

