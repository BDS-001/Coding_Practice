function fibs(seq) {
    let a = 0
    let b = 1
    let fib = [0]
    for (let index = 0; index < seq-1; index++) {
        const temp = a
        a = b
        b = temp+b
        fib += [a]
    }
    return fib
}


console.log(fibs(8))
console.log(fibs(3))