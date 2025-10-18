class Solution {
    constructor() {
        this.map = new Map()
    }
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        processPrereq(prerequisites)
        return numCourses === countComplete()
    }

    processPrereq(prerequisites) {
        for (let i = 0; i < prerequisites.length; i++) {
            const [course, pre] = prerequisites[i]
            if (!this.map.has(course)) this.map.set(course, new Set())
            if (!this.map.has(pre)) this.map.set(pre, new Set())
            this.map.get(course).push(pre)
        }
    }

    countComplete() {
        
    }
}

const test = new Solution()
test.canFinish(2, [[0,1]])