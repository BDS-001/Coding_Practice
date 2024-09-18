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
        if (!head || !head.next) return head
        const reverseList = (head) => {
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

        const newHead = new ListNode()
        let slow = head
        let fast = head?.next

        //get the mid point
        while(fast.next) {
            slow = slow.next
            fast = fast.next
            if (fast.next) fast = fast.next
        }

        //set fast and slow at thier heads and seperate
        fast = slow.next
        slow.next = null
        slow = head

        //reverse fast
        fast = reverseList(fast)


        //merge the list
        let pointer = newHead
        while(slow || fast) {
            if (slow) {
                pointer.next = slow
                slow = slow.next
                pointer = pointer.next
            }

            if (fast) {
                pointer.next = fast
                fast = fast.next
                pointer = pointer.next
            }
        }
    }
}
