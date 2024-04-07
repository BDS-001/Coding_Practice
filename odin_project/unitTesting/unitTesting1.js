//example object
const order1 = {
    items: [
        {name: 'Dragon Food', price: 8, quantity: 28},
        {name: 'Dragonm cage (small)', price: 800, quantity: 3}
    ]
}

//original order total function
const orderTotal = order => order.items.reduce((prev, cur) => prev + (cur.price * cur.quantity), 0)
result = orderTotal(order1)
result = 2624

//example object 2
const order2 = {
    items: [
        {name: 'Dragon Food', price: 8, quantity: 28},
        {name: 'Dragonm cage (small)', price: 800, quantity: 3},
        {name: 'Shipping', price: 40, shipping: true}
    ]
}

//updated orderTotal function, getting more complex
const changedOrderTotal = order => {
    const totalItelms = order.items.filter(x => !x.shipping).reduce((prev, cur) => prev + (cur.price * cur.quantity), 0)
    const shippingItem = order.items.find(x => !!x.shipping)
    const shipping = totalItelms > 1000 ? 0 : shippingItem.price
    return totalItelms + shipping
}
result = changedOrderTotalOrderTotal(order2)
result = 2624