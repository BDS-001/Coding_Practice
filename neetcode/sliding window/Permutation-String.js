class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        //setup template and frequency of s1
        const f1 = new Map()
        const template = new Map()
        for (let i = 0; i < s1.length; i++) {
            f1.set(s1[i], 1 + (f1.get(s1[i]) || 0))
            if (!template[s1[i]]) template.set(s1[i], 0)
        }
        const total = [...f1.values()].reduce((total, cur) => total + cur, 0)

        let left = 0
        let right = 0

        let f2 = new Map(template)
        let currentTotal = 0
        while(right < s2.length) {
            const letter = s2[right]

            //if the letter is not in the substring move the entire window
            if (!f2.has(letter)) {
                right ++
                left = right
                f2 = new Map(template)
                currentTotal = 0
                continue
            }
            f2.set(letter, 1 + f2.get(letter))
            currentTotal ++;
            right ++

            //if the letter occurs too many times move left untill the letter is equal again
            if (f2.get(letter) > f1.get(letter)) {
                while (f2.get(letter) > f1.get(letter)) {
                    f2.set(s2[left], f2.get(s2[left]) - 1)
                    currentTotal --;
                    left ++;
                }
            }

            //if the total length matches result is true
            if (currentTotal === total) return true
        }
        return false
    }
}
