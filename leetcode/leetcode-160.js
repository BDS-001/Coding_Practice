/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let hashMap = new Map();

    let pointerA = headA
    let pointerB = headB
    while(pointerA || pointerB) {
        if (hashMap.has(pointerA)) return pointerA
        if (pointerA) {
            hashMap.set(pointerA, 0)
            pointerA = pointerA.next
        }
        
        if (hashMap.has(pointerB)) return pointerB
        if (pointerB) {
            hashMap.set(pointerB, 0)
            pointerB = pointerB.next
        }
    }
    return null
};