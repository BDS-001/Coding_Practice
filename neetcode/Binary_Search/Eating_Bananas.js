class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        const eatBananas = (k, h, piles) => {
            let count = 0
            let curr = 0
            while(count <= h) {
                piles[curr] -= k
                if (piles[curr] <= 0) curr ++
                if (curr === piles.legth) return k
                count ++;
            }
            return null
        }

        let min = 1
        let max = Math.max(piles)
        let k = Math.floor((h+1) / 2)
        while (min <= h) {

        }
    }
}
