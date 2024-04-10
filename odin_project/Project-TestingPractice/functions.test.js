const { capitalize,reverseString,calculator } = require('./functions')

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