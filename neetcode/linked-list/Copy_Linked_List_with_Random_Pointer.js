// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        //setup node map
        const nodeMap = new Map()

        //first pass, map old nodes to copy nodes
        let curr = head
        nodeMap.set(null, null)
        while(curr) {
            nodeMap.set(curr, new Node(curr.val))
            curr = curr.next
        }

        //second pass, connect nodes
        curr = head
        while(curr) {
            const nodeCopy = nodeMap.get(curr)
            nodeCopy.next = nodeMap.get(curr.next)
            nodeCopy.random = nodeMap.get(curr.random)
            curr = curr.next
        }
        return nodeMap.get(head)
    }
}

