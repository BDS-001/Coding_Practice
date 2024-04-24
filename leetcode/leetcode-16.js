/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    let res = Infinity
    const recursion = (numsArray, currentSet, count) => {
        if (res === target) return
        if (count === 3) {
            let value = currentSet.reduce((acc, num) => acc + num, 0)
            if (Math.abs(value - target) < Math.abs(res - target)) res = value
        }

        for (let i = 0; i < numsArray.length; i++) {
            let newCurrentSet = [...currentSet, numsArray[i]];
            let newNums = [...numsArray]
            newNums.splice(i, 1)
            recursion(newNums, newCurrentSet, count+1)
        }
    }
    recursion(nums, [], 0)
    return res
};