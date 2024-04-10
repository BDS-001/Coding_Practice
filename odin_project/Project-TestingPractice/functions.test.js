const { capitalize, reverseString, calculator, analyzeArray, caesarCipher } = require('./functions')

//test capitalize
test('happy path', () => {
    expect(capitalize('leetcode')).toBe('Leetcode');
})

test('already capital', () => {
    expect(capitalize('Test')).toBe('Test');
})

test('no letters', () => {
    expect(capitalize('5436')).toBe('5436');
})

test('empty string', () => {
    expect(capitalize('')).toBe('');
})


//reverseString
test('happy path', () => {
    expect(reverseString('leetcode')).toBe('edocteel');
})

test('special characters', () => {
    expect(reverseString('fds t54;')).toBe(';45t sdf');
})

test('empty string', () => {
    expect(reverseString('')).toBe('');
})


//calculator
test('add', () => {
    expect(calculator.add(2, 6)).toBe(8);
})

test('subtract', () => {
    expect(calculator.subtract(54, 8)).toBe(46);
})

test('multiply', () => {
    expect(calculator.multiply(-34, 5)).toBe(-170);
})

test('divide', () => {
    expect(calculator.divide(90, 10)).toBe(9);
})


//analyzeArray
test('happy path', () => {
    expect(analyzeArray([1,8,3,4,2,6])).toEqual({average: 4, min: 1, max: 8, length: 6});
})

test('happy path (2)', () => {
    expect(analyzeArray([76, 9, 33, 35, 73, 74, 36, 31, 98, 10])).toEqual({average: 47.5, min: 9, max: 98, length: 10});
})


//ceacerCipher
test('shifts lowercase letters correctly', () => {
    expect(caesarCipher('abc', 1)).toBe('bcd');
    expect(caesarCipher('xyz', 2)).toBe('zab');
});

test('shifts uppercase letters correctly', () => {
    expect(caesarCipher('ABC', 1)).toBe('BCD');
    expect(caesarCipher('XYZ', 2)).toBe('ZAB');
});

test('maintains non-alphabetic characters and case', () => {
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
});