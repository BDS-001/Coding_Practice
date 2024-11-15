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
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        const newList = new ListNode()
        let pointer = newList
        let smallest = null
        do {
            smallest = null
            for (let i = 0; i < lists.length; i++) {
                if (!lists[i]) continue
                if (smallest === null) {
                    smallest = i
                    continue
                }
                if (lists[smallest].val > lists[i].val) smallest = i
            }
            if (smallest === null) continue
            const currentNode = lists[smallest]
            pointer.next = currentNode
            lists[smallest] = currentNode.next
            currentNode.next = null
            pointer = pointer.next
        } while(smallest !== null)

        return newList.next
    }
}
