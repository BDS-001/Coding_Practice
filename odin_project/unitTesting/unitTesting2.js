if (orderTotal({
    items: [
        {name: 'Dragon Food', price: 8},
        {name: 'Dragonm cage (small)', price: 800}
    ]
}) !== 808) {
    throw new Error('check fail: Happy path(1)')
    //happy path is main path with no edge cases
}

//should onyl write functions for what the test is testing, returning the value will pass all the tests, one test is not enough
let orderTotal = function() {
     return 808
}

if (orderTotal({
    items: [
        {name: 'Dragon Food', price: 8, quantity: 1},
        {name: 'Dragonm cage (small)', price: 800, quantity: 1}
    ]
}) !== 808) {
    throw new Error('check fail: Happy path')
    //happy path is main path with no edge cases
}





//triangulation test first methos is writting multiple tests
if (orderTotal({
    items: [
        {name: 'Dragon collar', price: 20},
        {name: 'Dragonm chew toy', price: 40}
    ]
}) !== 60) {
    throw new Error('check fail: Happy path(2)')
    //happy path is main path with no edge cases
}

if (orderTotal({
    items: [
        {name: 'Dragon bed', price: 65},
        {name: 'Dragonm leash', price: 130}
    ]
}) !== 195) {
    throw new Error('check fail: Happy path(3)')
    //happy path is main path with no edge cases
}

//update order total to pass all tests
orderTotal = function(order) {
    return order.items.reduce((prev, cur) => cur.price + prev, 0)
}