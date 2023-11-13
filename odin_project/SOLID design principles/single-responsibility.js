const badCalorieTracker = function(maxCalories) {
    const currentCalories = 0

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

const test1 = badCalorieTracker(500)
const test2 = badCalorieTracker(1700)

console.log(test1.maxCalories)
console.log(test2.maxCalories)

test1.trackCalories(600)
test2.trackCalories(600)