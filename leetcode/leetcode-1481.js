/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findLeastNumOfUniqueInts = function(arr, k) {
    if (k >= arr.length) return 0
    const map = new Map()
    for (let i = 0; i < arr.length; i++) {
        map.has(arr[i]) ? map.set(arr[i], map.get(arr[i]) + 1) : map.set(arr[i], 1)
    }

    const sortedArr =  Array.from(map.entries()).sort(([, valueA], [, valueB]) => valueA - valueB);
    for (let i = 0; i < sortedArr.length; i++) {
        if (k >= sortedArr[i][1]) {
            k -= sortedArr[i][1]
            map.delete(sortedArr[i][0])
        } else {
            return map.size
        }
    }
};