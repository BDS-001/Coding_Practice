const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1)
}

const reverseString = (str) => {
    return str.split('').reverse().join('');
}

const calculator = {
    add(num1, num2) {
        return num1 + num2
    },
    subtract(num1, num2) {
        return num1 - num2
    },
    divide(num1, num2) {
        return num1 / num2
    },
    multiply(num1, num2) {
        return num1 * num2
    }
}

module.exports = {
    capitalize,
    reverseString,
    calculator
}