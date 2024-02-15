function totalIntegers(array) {
    if (array.length === 0) return 0;

    let ints = 0
    const current = array.pop()
    
    if (Number.isInteger(current)) {
        ints ++;
    }else if (Array.isArray(current)) {
        ints += totalIntegers(current)
    }

    return ints + totalIntegers(array)
}



//test
var seven = totalIntegers([[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]]); // 7
console.log(seven);