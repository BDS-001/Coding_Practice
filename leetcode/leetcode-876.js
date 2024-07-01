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
var middleNode = function(head) {
    let p1 = head
    let p2 = head
    let move = false

    while (p1) {
        p1 = p1.next
        if (move) {
            move = false
            p2 = p2.next
        } else {
            move = true
        }
    }
    return p2
};