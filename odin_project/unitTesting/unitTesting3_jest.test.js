const orderTotal = require('./unitTesting3_function')

//test if jest is working correctly, file must end in .test.js
it('works', () => {

})
test('adds 1 + 2 to equal 3', () => {
    expect(1 + 2).toBe(3);
  });

if (orderTotal({
    items: [
        {name: 'Dragon Food', price: 8},
        {name: 'Dragonm cage (small)', price: 800}
    ]
}) !== 808) {
    throw new Error('check fail: quantity')
}

if (orderTotal({
    items: [
        {name: 'Dragon Food', price: 8, quantity: 1},
        {name: 'Dragonm cage (small)', price: 800, quantity: 1}
    ]
}) !== 808) {
    throw new Error('check fail: quantity')
}

if (orderTotal({
    items: [
        {name: 'Dragon collar', price: 20},
        {name: 'Dragonm chew toy', price: 40}
    ]
}) !== 60) {
    throw new Error('check fail: quantity')
}

if (orderTotal({
    items: [
        {name: 'Dragon bed', price: 65},
        {name: 'Dragonm leash', price: 130}
    ]
}) !== 195) {
    throw new Error('check fail: quantity')
}

if (orderTotal({
    items: [
        {name: 'Dragon bed', price: 65, quantity: 3},
        {name: 'Dragonm leash', price: 130, quantity: 4}
    ]
}) !== 715) {
    throw new Error('check fail: Happy path')
}