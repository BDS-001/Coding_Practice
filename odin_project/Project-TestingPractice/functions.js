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

const analyzeArray = (arr) => {
    return {
        average: (arr.reduce((total, curr) => total + curr, 0)) / arr.length,
        max: Math.max(...arr),
        min: Math.min(...arr),
        length: arr.length
    }
}

const _convertChar = (min, charCode, shiftFactor) => {
    return ((shiftFactor + (charCode - min)) % 26) + min
}

const caesarCipher = (str, shiftFactor) => {
    let cipher = ''
    for (let i = 0; i < str.length; i++) {
        if (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122) {
            cipher += String.fromCharCode(_convertChar(97, str.charCodeAt(i), shiftFactor))
        }else if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) {
            cipher += String.fromCharCode(_convertChar(65, str.charCodeAt(i), shiftFactor))
        } else {
            cipher += str[i]
        }
    }
    return cipher
}

module.exports = {
    capitalize,
    reverseString,
    calculator,
    analyzeArray,
    caesarCipher
}