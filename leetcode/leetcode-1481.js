/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findLeastNumOfUniqueInts = function(arr, k) {
    const hash = {}
    for (let i = 0; i < arr.length; i++) {
        hash[arr[i]] ? hash[arr[i]] += 1 : hash[arr[i]]
    }

    const sortedArr = Object.entries(hash).sort(([, valueA], [, valueB]) => valueA - valueB)
    while (true) {
        if (k > sortedArr[0][1]) {
            k -= sortedArr[0][1]
            sortedArr.shift()
        } else {
            return sortedArr.length
        }
    }
};