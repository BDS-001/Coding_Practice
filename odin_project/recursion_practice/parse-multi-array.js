function totalIntegers(array) {
    let ints = 0
    for (let index = 0; index < array.length; index++) {
        if (Number.isInteger(array[index])) {
            ints ++
        }
    }
    for (let index = 0; index < array.length; index++) {
        if (Array.isArray(array[index])) {
            return
        }
    }
}