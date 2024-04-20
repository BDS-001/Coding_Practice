class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        prev_num = None
        i = 1
        
        while i < len(nums):
            prev_num = nums[i - 1]
            
            if prev_num == nums[i]:
                nums.pop(i)
                continue
            i += 1
        return None