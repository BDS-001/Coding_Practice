
 //Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
 
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    const newList = new ListNode()
    let pointer = newList
    while(lists.length > 0) {
        let lowest = { node: null, pos: null, val: Infinity }

        //get the lowest value
        for (let i = 0; i < lists.length; i++) {
            if (lists[i] && (lowest.pos === null || lowest.val > lists[i].val)) {
                lowest = { node: lists[i], pos: i, val: lists[i].val }
            }
        }
        if (lowest.pos !== null) {
            pointer.next = lowest.node
            pointer = pointer.next
            lists[lowest.pos] = lists[lowest.pos].next
            if (!lists[lowest.pos]) {
                lists.splice(lowest.pos, 1)
            }
        } else {
            break
        }
    }
    return newList.next
};