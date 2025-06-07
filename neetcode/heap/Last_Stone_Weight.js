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
        stones.sort((a,b) => a - b)
        let heap = generateMaxHeap(stones)
    }

    generateMaxHeap(stones) {
        const head = new Node(stones.pop())
        const q = [head]

        while(stones.length > 0) {
            const node = q.shift()

            const left = new Node(stones.pop())
            node.left = left
            q.push(left)

            if (stones.length === 0) break

            const right = new Node(stones.pop())
            node.right = right
            q.push(right)
        }
        return head
    }
}