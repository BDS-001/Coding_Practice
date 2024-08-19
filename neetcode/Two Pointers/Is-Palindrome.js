class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const pal = s.toLowerCase().replace(/[^a-z0-9]/g, '');
        console.log(pal)
        let end = pal.length - 1
        for (let i = 0; i < pal.length; i++) {
            console.log(pal[end], pal[i])
            if (pal[end] != pal[i]) return false
            end -= 1
        }
        return true
    }
}
