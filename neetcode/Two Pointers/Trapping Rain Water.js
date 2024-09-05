class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(heights) {
        let left = 0
        let right = null
        let maxRain = 0

        while(left < heights.length) {
            //move left until it is higher than 0
            if (heights[left] <= 0) {
                left ++;
                continue
            }

            let maxHeight = null
            let minHeight = null
            for (let i = left + 1; i < heights.length; i++) {
                //find the lowest point and highest point after left index
                maxHeight = (maxHeight === null) ? heights[i] : Math.max(maxHeight, heights[i]);
                minHeight = (minHeight === null) ? heights[i] : Math.min(minHeight, heights[i]);

                //if a right side index is of greater or equal height collect that rain
                if (heights[i] >= heights[left]) {
                    right = i
                    break
                }
            }

            //if right side is all smaller, check if there is a point lower than the left and a point higher than the lowest point
            if (!right && minHeight < maxHeight && minHeight < heights[left]) {
                for (let i = left + 1; i < heights.length; i++) {
                    if (heights[i] === maxHeight) {
                        right = i
                        break
                    }
                }
            }

            if (right) {
                const height = Math.min(heights[left] , heights[right])
                for (let i = left + 1; i < right; i++) {
                    maxRain += height - heights[i]
                }
                // console.log('Height: ', height, 'left: ', left, 'Right: ', right, 'Water: ', maxRain)
                left = right
                right = null
            } else {
                left++;
            }
        }
        return maxRain
    }
}

// console.log('\n------ Testing ------\n');
// const test1 = new Solution().trap([0,1,0,2,1,0,1,3,2,1,2,1])
// console.log(test1, test1 === 6)

// console.log('\n------ Testing ------\n');
// const test2 = new Solution().trap([4,2,0,3,2,5])
// console.log(test2, test2 === 9)

// console.log('\n------ Testing ------\n');
// const test3 = new Solution().trap([4,2,3])
// console.log(test3, test3 === 1)

// console.log('\n------ Testing ------\n');
// const test4 = new Solution().trap([0,1,2,0,3,0,1,2,0,0,4,2,1,2,5,0,1,2,0,2])
// console.log(test4, test4 === 26)