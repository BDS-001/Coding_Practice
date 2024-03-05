/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    if (!head.next) {
        return null
    }
    let pointer = head
    let size = 0

    while(pointer) {
        size += 1;
        pointer = pointer.next
    }

    if (n === size) {
        return head.next
    }

    size -= n - 1;
    pointer = head
    let prev = head

    while(true) {
        if (size === 1) {
            prev.next = pointer.next
            return head
        }
        prev = pointer;
        pointer = pointer.next;
        size -= 1;
    }
};