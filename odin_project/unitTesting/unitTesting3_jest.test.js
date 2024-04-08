const orderTotal = require('./unitTesting3_function')

//test if jest is working correctly, file must end in .test.js
it('works', () => {

})
test('adds 1 + 2 to equal 3', () => {
    expect(1 + 2).toBe(3);
  });




//rewritting tests
it('No Quantity 1', () => {
    expect(orderTotal({
        items: [
            {name: 'Dragon Food', price: 8},
            {name: 'Dragon cage (small)', price: 800}
        ]
    })).toBe(808);
});

it('Quantity', () => {
    expect(orderTotal({
        items: [
            {name: 'Dragon Food', price: 8, quantity: 1},
            {name: 'Dragon cage (small)', price: 800, quantity: 1}
        ]
    })).toBe(808);
});

it('No Quantity 2', () => {
    expect(orderTotal({
        items: [
            {name: 'Dragon collar', price: 20},
            {name: 'Dragon chew toy', price: 40}
        ]
    })).toBe(60);
});

it('No Quantity 3', () => {
    expect(orderTotal({
        items: [
            {name: 'Dragon bed', price: 65},
            {name: 'Dragon leash', price: 130}
        ]
    })).toBe(195);
});

it('Happy Path', () => {
    expect(orderTotal({
        items: [
            {name: 'Dragon bed', price: 65, quantity: 3},
            {name: 'Dragon leash', price: 130, quantity: 4}
        ]
    })).toBe(715);
});