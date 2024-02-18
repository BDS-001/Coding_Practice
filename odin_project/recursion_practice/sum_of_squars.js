function SumSquares(array) {
    if (array.length === 0) return 0;

    let sum = 0
    const current = array.pop()
    
    if (Number.isInteger(current)) {
        sum += current * current;
    }else if (Array.isArray(current)) {
        sum += SumSquares(current)
    }

    return sum + SumSquares(array)
}


let l = [1,2,3]; 
console.log(SumSquares(l)); // 1 + 4 + 9 = 14

l = [[1,2],3]; 
console.log(SumSquares(l)); // 1 + 4 + 9 = 14

l = [[[[[[[[[1]]]]]]]]] 
console.log(SumSquares(l)); // 1 = 1

l = [10,[[10],10],[10]] 
console.log(SumSquares(l)); // 100 + 100 + 100 + 100 = 400