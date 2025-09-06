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
        this.clonedGraph = null
    }

    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
        if (!node) return node
        
        this.mapNodes(node)
        this.generateNewGraph(node)
        return this.clonedGraph   
    }

    mapNodes(node) {
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

    generateNodes() {
        const nodeList = []
        for (let i = 1; i <= this.map.size; i++) {
            const node = {val: i, neighbors: []}
            nodeList.push(node)
        }
        return nodeList
    }

    generateNewGraph() {
        const nodeList = this.generateNodes()
        for (let i = 0; i < nodeList.length; i++) {
            const currentNode = nodeList[i]
            const nodeNeighbors = this.map.get(currentNode.val)
            nodeNeighbors.forEach(num => {
                const neighborNode = nodeList[num - 1]
                currentNode.neighbors.push(neighborNode)
            });        
        }
        this.clonedGraph = nodeList[0]
    }
}