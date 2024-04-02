/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
    let counter = 1
    let column = 0
    for (let i = columnTitle.length - 1; i >= 0; i--) {
        column += (columnTitle.charCodeAt(i) - 64) * counter;
        counter *= 26;
    }
    return column
};