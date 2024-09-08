// class Solution {
//     /**
//      * @param {number[]} temperatures
//      * @return {number[]}
//      */
//     dailyTemperatures(temperatures) {
//         const daily = []

//         for (let i = 0; i < temperatures.length; i++) {
//             let days = 0
//             let p = i + 1
//             while(p < temperatures.length) {
//                 if (temperatures[p] > temperatures[i]) {
//                     days = p - i
//                     break
//                 }
//                 p ++;
//             }
//             daily.push(days)
//         }
//         return daily
//     }
// }

class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const daily = new Array(temperatures.length).fill(0)
        const tempStack = []
        let i = 0

        while (i < temperatures.length) {
            if (tempStack.length > 0 && temperatures[i] > tempStack[tempStack.length - 1].temp) {
                const temp = tempStack.pop()
                daily[temp.index] = i - temp.index
            } else {
                tempStack.push({temp: temperatures[i], index: i})
                i ++;
            }
        }
        return daily
    }
}

