// https://www.youtube.com/watch?v=3PjdxjWK0F0
// https://www.theodinproject.com/lessons/node-path-javascript-more-testing

function orderTotal(order) {
    return order.items.reduce((prev,cur) => cur.price * (cur.quantity || 1) + prev, 0)
}

module.exports = orderTotal