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
    const vals = []
    let p = head
    while (p) {
        vals.push(p.val)
        p = p.next
    }

    let right = vals.length - 1 
    for (let left = 0; left < vals.length; left++) {
        if (vals[left] != vals[right]) return false
        right--;
    }
    return true
};