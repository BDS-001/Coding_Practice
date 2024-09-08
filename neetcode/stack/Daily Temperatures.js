class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const daily = []

        for (let i = 0; i < temperatures.length; i++) {
            let days = 0
            let p = i + 1
            while(p < temperatures.length) {
                if (temperatures[p] > temperatures[i]) {
                    days = p - i
                    break
                }
                p ++;
            }
            daily.push(days)
        }
        return daily
    }
}
