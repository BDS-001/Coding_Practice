/**
 * Definition for singly-linked list.
 * class ListNode {
 * constructor(val = 0, next = null) {
 * this.val = val;
 * this.next = next;
 * }
 * }
 */
class Solution {
    /**
     * @param {ListNode} head
     * @param {number} k
     * @return {ListNode}
     */
    reverseKGroup(head, k) {
        const nodeSets = []
        this.collectPointers(head, k, nodeSets)
        console.log(nodeSets)
        this.reorderSets(nodeSets, k)
        this.connectSets(nodeSets, k)
        return nodeSets[0][0]
    }

    collectPointers(head, k, nodeSets) {
        let p = head
        while(p) {
            const kNodes = []
            for (let i = 0; i < k; i++) {
                if (!p) break
                kNodes.unshift(p)
                p = p.next
            }
            nodeSets.push(kNodes)
        }
    }

    reorderSets(nodeSets, k) {
        nodeSets.forEach(kNodes => {
            for (let i = 0; i < kNodes.length; i++) {
                if (kNodes.length != k) {
                    break
                }
                if (i === kNodes.length - 1) {
                    kNodes[i].next === null
                    break
                }
                kNodes[i].next = kNodes[i+1]
            }
        })
    }

    connectSets(nodeSets, k) {
        for (let i = 0; i < nodeSets.length-2; i++) {
            nodeSets[i][nodeSets[i].length - 1].next = nodeSets[i+1][0]
        }

        if(nodeSets[nodeSets.length - 1].length != k) {
            const secondLast = nodeSets[nodeSets.length - 2]
            const last = nodeSets[nodeSets.length - 1]

            secondLast[secondLast.length - 1].next = last[last.length - 1]
        }
    }
}