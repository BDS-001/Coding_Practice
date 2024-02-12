function all(arr, func) {
    const curr = arr.pop()
    if (!curr) return true
    if (!func(curr)) return false
    return all(arr, func)
}



//test
let allAreLessThanSeven = all([1,2,9], function(num){
	return num < 7;
});

console.log(allAreLessThanSeven);

allAreLessThanSeven = all([1,2,4], function(num){
	return num < 7;
});

console.log(allAreLessThanSeven);