import logMessage from "./logger"

//bad design
const badCalorieTracker = function(maxCalories) {
    let currentCalories = 0

    function trackCalories(calorieCount) {
        currentCalories += calorieCount
        if (currentCalories > maxCalories) {
            console.log('surplus')
        }

    }

    return {
        maxCalories,
        currentCalories,
        trackCalories
    }
}

let test1 = badCalorieTracker(500)
let test2 = badCalorieTracker(1700)

console.log(test1.maxCalories)
console.log(test2.maxCalories)

test1.trackCalories(600)
test2.trackCalories(600)

const calorieTracker = function(maxCalories) {
    let currentCalories = 0

    function trackCalories(calorieCount) {
        currentCalories += calorieCount
        if (currentCalories > maxCalories) {
            logMessage('max calieries exceeded')
        }

    }

    return {
        maxCalories,
        currentCalories,
        trackCalories
    }
}

test1 = calorieTracker(500)
test2 = calorieTracker(1700)

console.log(test1.maxCalories)
console.log(test2.maxCalories)

test1.trackCalories(600)
test2.trackCalories(600)