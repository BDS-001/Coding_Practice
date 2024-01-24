/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let p1 = 0
    let p2 = 1

    let longest = ''
    function palindrome(str) {
        return str === str.split('').reverse().join('');
    }

    while(p1 < s.length) {
        let sub = s.substring(p1, p2)
        if (palindrome(sub)) {
            longest = longest.length < sub.length ? sub : longest;
            console.log(sub, longest)
        }

        p2++;
        if (p2 > s.length) {
            p1++;
            p2 = p1 + 1;
        }
    }
    return longest
};

longestPalindrome('bb')