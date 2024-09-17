/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {void}
     */
    reorderList(head) {
        //get the length and find the stopping point
        let length = 0
        let p = head
        while(p) {
            length ++;
            p = p.next
        }
        const half = Math.ceil(length / 2)
        let startP = head
        let startAhead = startP?.next

        console.log('here')
        for (let i = half; i > 0; i--) {
            let curr = startP
            let prev = null
            
            while(curr.next) {
                prev = curr
                curr = curr.next
            }
            console.log(curr)

            startP.next = curr
            curr.next = startAhead
            if (i != 1) prev.next = null

            startP = startAhead
            startAhead = startAhead?.next
        }
        
        return head
    }
}
