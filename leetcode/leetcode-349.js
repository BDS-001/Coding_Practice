/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    const newNums1 = [...new Set(nums1)]
    const newNums2 = new Set(nums2)

    return newNums1.filter(val => newNums2.has(val))
};