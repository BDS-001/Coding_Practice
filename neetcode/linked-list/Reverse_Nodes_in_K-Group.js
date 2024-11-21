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
        if (!head) return
        const nodeSets = []
        this.collectPointers(head, k, nodeSets)
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
                kNodes.push(p)
                p = p.next
            }
            nodeSets.push(kNodes)
        }
    }

    reorderSets(nodeSets, k) {
        nodeSets.forEach(kNodes => {
        if (kNodes.length === k) { 
            kNodes.reverse();
            for (let i = 0; i < kNodes.length; i++) {
                if (i === kNodes.length - 1) {
                    kNodes[i].next = null;
                } else {
                    kNodes[i].next = kNodes[i + 1];
                }
            }
        }
    });
    }

    connectSets(nodeSets, k) {
        if (nodeSets.length <= 1) return;

        for (let i = 0; i < nodeSets.length-1; i++) {
            const currentSet = nodeSets[i]
            const nextSet = nodeSets[i+1]

           currentSet[currentSet.length - 1].next = nextSet[0]
        }
        
        const lastSet = nodeSets[nodeSets.length - 1];
        lastSet[lastSet.length - 1].next = null;
    }
}