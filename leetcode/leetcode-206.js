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
var reverseList = function(head) {
    const stack = []
    let p = head

    while (p) {
        stack.push(p)
        p = p.next
    }

    if (stack.length === 0) {
    return null;
}

    const newHead = stack.pop()
    p = newHead

    while (stack.length > 0) {
        p.next = stack.pop()
        p = p.next
    }

    p.next = null
    return newHead
};