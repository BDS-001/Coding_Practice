//introducing a test runner jest
const orderTotal = function(order) {
    return order.items.reduce((prev, cur) => cur.price * (cur.quantity || 1) + prev, 0)
}

module.exports = orderTotal