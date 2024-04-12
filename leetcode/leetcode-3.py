class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        
        current_word = ""
        highest = 0
        for char in s:
            exists = current_word.find(char)
            if exists == -1:
                current_word += char
            else:
                if len(current_word) > highest:
                    highest = len(current_word)
                current_word = current_word[exists + 1:] + char

        if len(current_word) > highest:
            highest = len(current_word)
        return highest