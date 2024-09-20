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
        const newHead = new Node()
        let oldP = head;
        let newP = newHead

        while(oldP) {
            newP.next = new Node(oldP.val, null, null)

            newP = newP.next
            oldP = oldP.next
        }
        return newHead.next
    }
}
