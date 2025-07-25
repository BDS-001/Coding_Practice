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

        //convert into object that stores required data
        const formattedTasks = [...countMap.entries()].map(([key, val]) => {
            return {val: key, count: val, nextCycle: 0}
        })

        //sort for largest to smallest task count
        const processTasks = formattedTasks.sort((a, b) => b.count - a.count)
        processTasks.forEach((task, i) => task.nextCycle = i) //larger task count run first to optimize cycles

        //set task heap to sorted array and call heapify
        this.taskHeap = processTasks
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

        while(this.taskHeap.length > 0) {
            const task = this.dequeue() //get the next task in heap
            console.log(`\n=== CYCLE ${cycles} START ===`)
            console.log(`Task: ${task.val}, Count: ${task.count}, NextCycle: ${task.nextCycle}`)

            if (task.nextCycle > cycles) cycles += task.nextCycle - cycles //calculate idle amount

            task.count -= 1
            if (task.count > 0) {
                //if this task is not complete update next valid cycle and add back to heap
                task.nextCycle = cycles + n + 1
                this.enqueue(task)
            }

            cycles += 1 // pass the check we are performing one cycle
            console.log(`--- CYCLE ${cycles - 1} END ---`)
            console.log(`Task: ${task.val}, Remaining: ${task.count}, NextAvailable: ${task.nextCycle}`)
            console.log(`Heap size: ${this.taskHeap.length}`)
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
}
