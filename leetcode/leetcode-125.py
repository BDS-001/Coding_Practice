class Solution:
    def isPalindrome(self, s: str) -> bool:
        new = ''
        for char in s:
            if char.isalpha() or char.isdigit():
                new += char.lower()
        return new == new[::-1]