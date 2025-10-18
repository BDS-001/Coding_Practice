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
        if (!prerequisites || prerequisites.length === 0) return true
        this.processPrereq(prerequisites)
        for (const [key, _val] of this.map) {
            if (!this.canComplete(key)) return false
        }
        return true
    }

    processPrereq(prerequisites) {
        for (let i = 0; i < prerequisites.length; i++) {
            const [course, pre] = prerequisites[i]
            if (!this.map.has(course)) this.map.set(course, new Set())
            if (!this.map.has(pre)) this.map.set(pre, new Set())
            this.map.get(course).add(pre)
        }
    }

    canComplete(key, visited = new Set()) {
        if (visited.has(key)) return false
        visited.add(key)

        const pre = this.map.get(key)

        for (const val of pre) {
            if (!this.canComplete(val, new Set(visited))) return false
        }
        return true
    }
}

const test = new Solution()
//fails should be true
const res = test.canFinish(5,[[1,4],[2,4],[3,1],[3,2]])

console.log(res == true ? 'pass' : 'fails')