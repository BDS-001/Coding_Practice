class Solution {
    
    constructor() {
        this.map = []
    }

    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses, prerequisites) {
        if (!prerequisites || prerequisites.length === 0) return true
        this.setupMap(numCourses)
        this.processPrereq(prerequisites)
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
}
