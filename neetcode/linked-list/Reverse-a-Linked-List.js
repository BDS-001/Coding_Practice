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
     * @return {ListNode}
     */
    reverseList(head) {
        let current = head
        let ahead = current?.next
        let prev = null
        if (!ahead) return head

        while(ahead) {
            current.next = prev

            prev = current
            current = ahead
            ahead = ahead.next
        }

        current.next = prev
        return current
    }
}
