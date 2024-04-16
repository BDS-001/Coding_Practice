class Solution:
    def letterCombinations(self, digits: str) -> List[str]:
        if not digits:
            return []
        nums = {'2': 'abc', '3': 'def', '4': 'ghi', '5': 'jkl', '6': 'mno', '7': 'pqrs', '8':   'tuv', '9': 'wxyz'}
        combos = []
        def phone(digits, combo):
            if not digits:
                combos.append(combo)
                return
            for letter in nums[digits[0]]:
                phone(digits[1:], combo + letter)
            return
        
        phone(digits, "")
        return combos