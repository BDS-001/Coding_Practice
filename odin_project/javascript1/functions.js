function add7(number) {
    return number + 7;
}

console.log(add7(6));



function multiply(number1, number2) {
    return number1 * number2;
}

console.log(multiply(5, 10));


function capitalize(word) {
    return word[0].toUpperCase() + word.slice(1).toLowerCase()
}

console.log(capitalize('gAMING'));


function lastLetter(word) {
    return word[word.length - 1]
}

console.log(lastLetter('testing the code'));