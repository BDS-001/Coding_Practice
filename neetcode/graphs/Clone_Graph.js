/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    constructor() {
        this.map = new Map()
    }

    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
        this.mapNode(node)
    }

    mapNode(node) {
        const queued = new Set()
        const q = [node]


        while(q.length > 0) {
            const currentNode = q.shift()

            const neighborsNums = currentNode.neighbors.reduce((acc, curr) => {
                //add all non queued neighbors
                if (!queued.has(curr.val)) {
                    q.push(curr)
                    queued.add(curr.val)
                }
                //return just the vals to the new array
                acc.push(curr.val)
                return acc
            }, [])

            this.map.set(currentNode.val, neighborsNums)
        }
    }
}