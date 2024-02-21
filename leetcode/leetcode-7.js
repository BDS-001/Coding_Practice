/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let val = 0;
    while(x) {
        val = val*10
        val += x%10;
        x = (x / 10) | 0;
    }
    return (val >= -2147483648 && val <= 2147483647) ? val : 0
};