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
        let heap = this.generateMaxHeap(stones)
        const head = new Node(0, heap, null)
        return this.simulate(head)
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

    smash(head) {
        const stone1 = head
        const stone2 = !head.right ? head.left : head.left.val > head.right.val ? head.left : head.right

        stone1.val -= stone2.val
        stone2.val -= stone1.val
    }

    organize(head, parent, direction) {
        if (!head) return
        if (head.val <= 0 && !head.left && !head.right) {
            parent[direction] = null
        }

        if (head.left && head.val < head.left.val) {
            const tmp = head.val
            head.val = head.left.val
            head.left.val = tmp
        }

        if (head.right && head.val < head.right.val) {
            const tmp = head.val
            head.val = head.right.val
            head.right.val = tmp
        }

        if (head.left) this.organize(head.left, head, 'left')
        if (head.right) this.organize(head.right, head, 'right')
    }

    simulate(head) {
        const heap = head.left
        while (heap && (heap.left || heap.right)) {
            this.smash(heap)
            this.organize(heap, head, 'left')
        }
        return head.left ? head.left.val : null
    }
}