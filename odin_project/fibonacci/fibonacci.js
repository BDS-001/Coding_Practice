function fibs(seq) {
    let a = 0
    let b = 1
    let fib = []
    for (let index = 0; index < seq; index++) {
        const temp = a
        a = b
        b = temp+b
        fib += [temp]
    }
    return fib
}


console.log(fibs(8))
console.log(fibs(3))


function fibRec(seq, a=0, b=1) {
    if (seq < 1) return []
    const temp = a
    a = b
    b = temp+b
    return [temp] + fibRec(seq-1, a, b)
}

console.log(fibRec(8))
console.log(fibRec(3))