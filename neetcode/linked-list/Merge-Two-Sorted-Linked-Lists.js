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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        let p1 = list1
        let p2 = list2

        let newList = new ListNode()
        let newPointer = newList
        while(p1 && p2) {
            if (p1.val <= p2.val) {
                newPointer.next = p1
                p1 = p1.next
            } else {
                newPointer.next = p2
                p2 = p2.next
            }
            newPointer = newPointer.next
        }
        newPointer.next = p1 || p2
        return newList.next
    }
}