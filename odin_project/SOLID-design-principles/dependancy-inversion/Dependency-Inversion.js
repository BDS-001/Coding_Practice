class Store {
    constructor(user) {
        this.stripe = new Stripe(user)
    }

    purchaseBike(quantity) {
        this.stripe.makePayment(200 * quantity * 100)
    }

    purchasePokeBall(quantity) {
        this.stripe.makePayment(20 * quantity * 100)
    }
}

//stripe api
class Stripe {
    constructor(user) {
        this.user = user
    }

    makePayment(amountInCents) {
        console.log(`${this.user} made a payment of $${amountInCents / 100} with stripe`)
    }
}

//paypal api
class Paypal {
    //make payment function is different so to use paypal we need to change everything in out store to get it to work
    makePayment(user, amountInDollars) {
        console.log(`${user} made a payment of $${amountInDollars} with paypal`)
    }
}