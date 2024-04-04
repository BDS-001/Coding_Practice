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
        if (pointerA) {
            if (hashMap.has(pointerA)) return pointerA
            hashMap.set(pointerA, 0)
            pointerA = pointerA.next
        }
        
        if (pointerB) {
            if (hashMap.has(pointerB)) return pointerB
            hashMap.set(pointerB, 0)
            pointerB = pointerB.next
        }
    }
    return null
};

var getIntersectionNodeLowMemory = function(headA, headB) {
    let pointerA = headA
    while(pointerA) {
        let pointerB = headB
        while (pointerB) {
            if (pointerA === pointerB) return pointerA
            pointerB = pointerB.next
        }
        pointerA = pointerA.next
    }
    return null
};