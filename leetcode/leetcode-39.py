class Solution:
    def combinationSum(self, candidates: List[int], target: int) -> List[List[int]]:
        
        answers = []
        
        def check(current):
            total = 0
            for num1 in current:
                total += num1
            if total == target:
                for item in answers:
                    if sorted(current) == sorted(item):
                        return
                answers.append(current)
                return
            if total > target:
                return
            
            for num in candidates:
                tmp = current + [num]
                check(tmp)
                
                
        test = []
        check(test)
        return answers