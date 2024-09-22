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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        let num1 = []
        let num2 = []

        let p1 = l1
        let p2 = l2

        while(p1 || p2) {
            if (p1){
                num1.push(p1.val)
                p1 = p1.next
            }
            if (p2) {
                num2.push(p2.val)
                p2 = p2.next
            }
        }
        let total = num1.map((val, index) => val * Math.pow(10, index)).reduce((sum, num) => sum + num, 0) + num2.map((val, index) => val * Math.pow(10, index)).reduce((sum, num) => sum + num, 0);

        let dummyHead = new ListNode(0);
        let current = dummyHead;
        if (total === 0) {
            return dummyHead;
        }
        while (total > 0) {
            current.next = new ListNode(total % 10);
            current = current.next;
            total = Math.floor(total / 10);
        }
        return dummyHead.next;
    }
}
