/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    if (!head || !head.next) return head
    pointer1 = head
    pointer2 = pointer1.next
    prev = null
    head = pointer2

    while (pointer1 && pointer2) {
        pointer1.next = pointer2.next
        pointer2.next = pointer1

        if (prev) prev.next = pointer2
        prev = pointer1

        pointer1 = pointer1.next
        if (pointer1) pointer2 = pointer1.next
    }
    return head
};