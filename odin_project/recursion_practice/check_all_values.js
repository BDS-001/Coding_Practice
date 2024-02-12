function all(arr, func) {
    const curr = arr.pop()
    if (!curr) return true
    if (!func(curr)) return false
    all(arr, func)
}



//test
const allAreLessThanSeven = all([1,2,9], function(num){
	return num < 7;
});

console.log(allAreLessThanSeven);