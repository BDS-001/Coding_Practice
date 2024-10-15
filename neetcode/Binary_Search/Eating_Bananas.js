class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        const timeToEatBananas = (k, piles) => {
            return piles.reduce((hours, pile) => hours + Math.ceil(pile / k), 0);
        }

        let min = 1
        let max = Math.max(...piles)
        let shortest = max
        while (min <= max) {
            const k = Math.floor((max + min) / 2)
            const res = timeToEatBananas(k, piles)
            if (res > h) {
                //it takes too many hours increase k
                min = k + 1
            } else {
                //check lower k values
                shortest = Math.min(shortest, k)
                max = k - 1
            }
        }
        return shortest
    }
}
