class Store {
    constructor(paymentProcessor) {
        this.paymentProcessor = paymentProcessor
    }

    purchaseBike(quantity) {
        this.paymentProcessor.pay(200 * quantity)
    }

    purchasePokeBall(quantity) {
        this.paymentProcessor.pay(20 * quantity)
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
    makePayment(user, amountInDollars) {
        console.log(`${user} made a payment of $${amountInDollars} with paypal`)
    }
}

//api wrapper that has the same function for all other payment wrappers
class StripePaymentProcessor {
    constructor(user) {
        this.stripe = new Stripe(user)
    }

    pay(amountInDollars) {
        this.stripe.makePayment(amountInDollars * 100)
    } 
}

//api wrapper that has the same function for all other payment wrappers
class PaypalPaymentProcessor {
    constructor(user) {
        this.user = user
        this.paypal = new Paypal(user)
    }

    pay(amountInDollars) {
        this.paypal.makePayment(this.user, amountInDollars)
    } 
}