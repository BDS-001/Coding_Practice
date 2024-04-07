if (orderTotal({
    items: [
        {name: 'Dragon Food', price: 8},
        {name: 'Dragonm cage (small)', price: 800}
    ]
}) !== 808) {
    throw new Error('check fail: quantity')
}

//should only write functions for what the test is testing, returning the value will pass all the tests, one test is not enough
let orderTotal = function() {
     return 808
}

if (orderTotal({
    items: [
        {name: 'Dragon Food', price: 8, quantity: 1},
        {name: 'Dragonm cage (small)', price: 800, quantity: 1}
    ]
}) !== 808) {
    throw new Error('check fail: quantity')
}





//triangulation test first method is writting multiple tests
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

//update order total to pass all tests
orderTotal = function(order) {
    return order.items.reduce((prev, cur) => cur.price + prev, 0)
}

//to update the code to include quantity we have to be mindful of the prev tests, chanignt the api will break all the tests and any uses of it in the wild
orderTotal = function(order) {
    return order.items.reduce((prev, cur) => cur.price * (cur.quantity || 1) + prev, 0)
}

if (orderTotal({
    items: [
        {name: 'Dragon bed', price: 65, quantity: 3},
        {name: 'Dragonm leash', price: 130, quantity: 4}
    ]
}) !== 715) {
    throw new Error('check fail: Happy path')
    //happy path is main path with no edge cases
}

//all older tests now test quantity missing instead of happy path