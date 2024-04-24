/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    const romanNumerals = [
        { "roman": "I", "value": 1 },
        { "roman": "V", "value": 5 },
        { "roman": "X", "value": 10 },
        { "roman": "L", "value": 50 },
        { "roman": "C", "value": 100 },
        { "roman": "D", "value": 500 },
        { "roman": "M", "value": 1000 }
    ];

    let res = '';
    let row = 0;

    while(num) {
        let currentVal = num % 10;
        num = Math.floor(num / 10);

        let numeral = "";

        // Handle 9s
        if (currentVal === 9) {
            numeral = romanNumerals[row].roman + romanNumerals[row + 2].roman;
            currentVal = 0;
        } 
        // Handle 4s
        else if (currentVal === 4) {
            numeral = romanNumerals[row].roman + romanNumerals[row + 1].roman;
            currentVal = 0;
        }
        // Handle numbers 5 to 8
        else if (currentVal >= 5) {
            numeral = romanNumerals[row + 1].roman;
            currentVal -= 5;
            numeral += romanNumerals[row].roman.repeat(currentVal);
            currentVal = 0;
        } 
        // Handle numbers 1 to 3
        else if (currentVal > 0) {
            numeral = romanNumerals[row].roman.repeat(currentVal);
            currentVal = 0;
        }

        res = numeral + res;
        row += 2;
    }

    return res;
};
