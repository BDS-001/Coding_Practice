/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    const reverse = []
    let p = head
    while (p) {
        reverse.unshift(p.val)
        p = p.next
    }

    p = head
    for (let i = 0; i < reverse.length; i++) {
        if (reverse[i] != p.val) return false
        p = p.next
    }
    return true
};