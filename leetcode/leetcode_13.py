class Solution:
    def romanToInt(self, s: str) -> int:
        roman_dict = {
            'I': 1,
            'V': 5,
            'X': 10,
            'L': 50,
            'C': 100,
            'D': 500,
            'M': 1000
        }

        result = 0

        for i in range(len(s)):
            # If the current numeral is smaller than the next one, subtract its value
            if i + 1 < len(s) and roman_dict[s[i]] < roman_dict[s[i + 1]]:
                result -= roman_dict[s[i]]
            else:
                # Else, add its value
                result += roman_dict[s[i]]

        return result