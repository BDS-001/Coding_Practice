class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        let heap = this.generateMaxHeap(stones)
        return this.simulate(heap)
    }

    generateMaxHeap(stones) {
        //sort stones in descending order
        stones.sort((a,b) => b - a)

        //return an array starting at index 1 to follow heap logic
        //left: 2*i
        //right: 2*i + 1
        return [null, ...stones]
    }

    simulate(heap) {
        return 0
    }
}