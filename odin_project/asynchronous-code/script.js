(new Promise((resolve, reject) => { reject("Nope"); }))
    .then(() => { console.log("success") })
    .catch(() => { console.log("fail") })
    .finally(res => { console.log("finally") });

// >> fail
// >> finally

// then is used when a promise is resolved, 
//catch is used when a promise is rejected,
//finally is used when a promise is either resolved or rejected


let p = new Promise((resolve, reject) => {
    let a = 1 + 1
    if (a == 2) {
        resolve('success')
    } else {
        reject('Failed')
    }
})

p.then((message) => {
    console.log(`this is the success message: ${message}`)
}).catch((message) => {
    console.log(`this is the fail message: ${message}`)
})

const recordVideoOne = new Promise((resolve, reject) => {
    resolve('video 1 recorded')
})

const recordVideoTwo = new Promise((resolve, reject) => {
    resolve('video 2 recorded')
})

const recordVideoThree = new Promise((resolve, reject) => {
    resolve('video 3 recorded')
})


//completes all at the same time
Promise.all([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree
]).then((messages) => {
    console.log(messages)
})

//return once the first one is completed
Promise.race([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree
]).then((message) => {
    console.log(message)
})