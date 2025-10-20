class Solution {
    
    constructor() {
        this.map = []
        this.order = new Set()
    }

    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses, prerequisites) {
        if (!prerequisites || prerequisites.length === 0) return Array.from({length: numCourses}, (_, i) => i)
        this.setupMap(numCourses)
        this.processPrereq(prerequisites)

        for (let i = 0; i < this.map.length; i++) {
            if (!this.canComplete(i)) return []
        }

        this.addFreeCourses()
        this.getOrder(numCourses)
        return Array.from(this.order)
    }

    processPrereq(prerequisites) {
        for (let i = 0; i < prerequisites.length; i++) {
            const [course, pre] = prerequisites[i]
            this.map[course].add(pre)
        }
    }

    setupMap(n) {
        this.map = Array.from({length: n}, (_, i) => new Set())
    }

    addFreeCourses() {
        for (let i = 0; i < this.map.length; i++) {
            if (this.map[i].length == 0) this.order.add(i)
        }
    }

    canComplete(key, visited = new Set()) {
        if (visited.has(key)) return false
        visited.add(key)

        const pre = this.map[key]

        for (const val of pre) {
            if (!this.canComplete(val, new Set(visited))) return false
        }
        return true
    }

    getOrder(numCourses) {
        const bank = this.map.map((prereq, index) => {return {class: index, prereq}}).sort((a,b) => a.prereq.length - b.prereq.length)
        while(this.order.size < numCourses) {
            for (let i = 0; i < bank.length; i++) {
                const {class: course, prereq} = bank[i]

                if (!this.allPrereqComplete(prereq)) continue

                this.order.add(course)
                bank.splice(i, 1)
                break
            }
        }
    }

    allPrereqComplete(prereq) {
        for (const pre of prereq) {
            if (!this.order.has(pre)) return false
        }
        return true
    }
}
