class Node {
    constructor(val = null, left = null, right = null) {
        this.val = val
        this.left = left
        this.right = right
    }
}

class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        let heap = generateHeap(stones)
    }

    generateHeap(stones) {
        if (stones.length < 1) return null
        const head = new Node(stones[0])
        stones.shift()
        const center = Math.floor(stones.length / 2)
        head.left = this.generateHeap(stones.splice(0, center))
        head.right = this.generateHeap(stones[splice(center)])
    }
}