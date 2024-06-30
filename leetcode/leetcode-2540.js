/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var getCommon = function(nums1, nums2) {
    let p1 = 0
    let p2 = 0
    const max1 = nums1.length - 1
    const max2 = nums2.length - 1

    while(p1 <= max1 && p2 <= max2) {
        if (nums1[p1] === nums2[p2]) return nums1[p1]
        if (p1 === max1) {
            p2++
        } else if (p2 === max2) {
            p1++
        } else {
            nums1[p1] < nums2[p2] ? p1++ : p2++
        }
    }
};