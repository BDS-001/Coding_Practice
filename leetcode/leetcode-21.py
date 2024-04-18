# Definition for singly-linked list.
class ListNode:
     def __init__(self, val=0, next=None):
         self.val = val
         self.next = next
class Solution:
    def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:

        new_list = ListNode()
        def link(prev, first, second):
            tmp = ListNode()
            if first is None:  
                if second is None:
                    return
                else:
                    tmp.val = second.val
                    second = second.next
            elif second is None:
                tmp.val = first.val
                first = first.next
            elif first.val <= second.val:
                tmp.val = first.val
                first = first.next
            else:
                tmp.val = second.val
                second = second.next

            prev.next = tmp
            link(tmp, first, second)
            return

        link(new_list, list1, list2)
        return new_list.next
