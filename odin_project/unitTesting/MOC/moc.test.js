const orderTotal = require('./MOC-UnitTesting.js')

const emptyFunction = () => {}

//test if jest is working correctly, file must end in .test.js
it('works', () => {

})

test('adds 1 + 2 to equal 3', () => {
    expect(1 + 2).toBe(3);
  });

//rewritting tests
it('No Quantity 1', () => {
    orderTotal(emptyFunction, {
        items: [
            {name: 'Dragon Food', price: 8},
            {name: 'Dragon cage (small)', price: 800}
        ]
    }).then(result => expect(result).toBe(808));
});

it('Quantity', () => {
    orderTotal(emptyFunction, {
        items: [
            {name: 'Dragon Food', price: 8, quantity: 1},
            {name: 'Dragon cage (small)', price: 800, quantity: 1}
        ]
    }).then(result => expect(result).toBe(808));
});

it('No Quantity 2', () => {
    orderTotal(emptyFunction, {
        items: [
            {name: 'Dragon collar', price: 20},
            {name: 'Dragon chew toy', price: 40}
        ]
    }).then(result => expect(result).toBe(60));
});

it('No Quantity 3', () => {
    orderTotal(emptyFunction, {
        items: [
            {name: 'Dragon bed', price: 65},
            {name: 'Dragon leash', price: 130}
        ]
    }).then(result => expect(result).toBe(195));
});

it('Happy Path', () => {
    orderTotal(emptyFunction, {
        items: [
            {name: 'Dragon bed', price: 65, quantity: 3},
            {name: 'Dragon leash', price: 130, quantity: 4}
        ]
    }).then(result => expect(result).toBe(715));
});

it('calls vat api if given country', () => {
    let isFakeFetchCalled = false
    const fakeFetch = (url) => {
        isFakeFetchCalled = true
    }
    orderTotal( fakeFetch, {
        country: 'DE',
        items: [
            {name: 'Dragon waffles', price: 20, quantity: 2},
        ]
    }).then(result => expect(isFakeFetchCalled).toBe(true));
});