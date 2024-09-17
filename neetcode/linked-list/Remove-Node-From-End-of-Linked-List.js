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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let length = 0
        let p = head
        while (p) {
            length++
            p = p.next
        }
        let remove = length - n;

        p = head
        let prev = null
        console.log(remove)
        while (remove > 0) {
            prev = p
            p = p.next
            remove --;
        }

        console.log(prev?.val, p?.val)
        prev ? prev.next = p.next : head = head.next
        return head
    }
}