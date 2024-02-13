function productOfArray(array) {
    const num = array.pop()
    if (array.length === 0) return num
    return num * productOfArray(array) 
}

console.log(productOfArray([1,2,3]))
console.log(productOfArray([1,2,3, 10]))