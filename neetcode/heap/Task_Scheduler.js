class Solution {
    /**
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */
    constructor() {
        this.tasks = []
    }

    leastInterval(tasks, n) {
        this.setupTasks(tasks)
        return this.simulateCycles(n)
    }

    setupTasks(tasks) {
        const countMap = tasks.reduce((map, curr) => {
            map.set(curr, (map.get(curr) || 0) + 1)
        }, new Map())

        formattedTasks = Object.entries(countMap).map(([key, val]) => {
            return {val: key, count: val, nextCycle: 0}
        })

        this.tasks = formattedTasks
    }

    simulateCycles(n) {
        let cycles = 0
        while(this.tasks.length) {
            const task = this.tasks[0]
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

        if (left < this.tasks.length && this.tasks[smallest].nextCycle > this.tasks[left].nextCycle) {
            smallest = left
        }

        if (right < this.tasks.length && this.tasks[smallest].nextCycle > this.tasks[right].nextCycle) {
            smallest = right
        }

        if (smallest !== i) {
            const tmp = this.tasks[i]
            this.tasks[i] = this.tasks[smallest]
            this.tasks[smallest] = tmp
            this.heapifyDown(smallest)
        }
    }

    heapifyUp(i) {
        if (i === 0) return
        const parent = Math.floor((i - 1) / 2)

        if (this.tasks[i].nextCycle < this.tasks[parent].nextCycle) {
            const tmp = this.tasks[i]
            this.tasks[i] = this.tasks[parent]
            this.tasks[parent] = tmp
            this.heapifyUp(parent)
        }
    }
}
