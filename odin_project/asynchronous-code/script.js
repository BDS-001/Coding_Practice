(new Promise((resolve, reject) => { reject("Nope"); }))
    .then(() => { console.log("success") })
    .catch(() => { console.log("fail") })
    .finally(res => { console.log("finally") });

// >> fail
// >> finally

// then is used when a promise is resolved, 
//catch is used when a promise is rejected,
//finally is used when a promise is either resolved or rejected