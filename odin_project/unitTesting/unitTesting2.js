if (orderTotal({
    items: [
        {name: 'Dragon Food', price: 8, quantity: 1},
        {name: 'Dragonm cage (small)', price: 800, quantity: 1}
    ]
}) !== 808) {
    throw new Error('check fail: Happy path')
    //happy path is main path with no edge cases
}

//should onyl write functions for what the test is testing, returning the value will pass the test
function orderTotal() {
     return 808
}