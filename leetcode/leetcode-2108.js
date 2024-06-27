/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
    function palindrome(word) {
        let reverse = word.length - 1
        for (let i = 0; i < word.length; i++) {
            if (word[i] != word[reverse]) return false
            reverse -= 1
        }
        return true
    }

    for (let i = 0; i < words.length; i++) {
        if (palindrome(words[i])) return words[i]
    }
    return ''
};