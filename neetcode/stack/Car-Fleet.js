class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const cars = Array.from(position.keys()).map(i => ({pos: position[i], time: (target - position[i]) / speed[i]}))
        cars.sort((a, b) => b.pos - a.pos)
        
        let fleets = 0
        console.log(cars)
        while(cars.length > 0) {
            const time = cars[0].time
            fleets += 1
            while(cars.length > 0 && cars[0].time <= time) cars.shift()
        }
        return fleets
    }
}


// new Solution().carFleet(10, [4,1,0,7], [2,2,1,1])