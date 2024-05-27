// Promises:
// Promises are used to get rid of pyramid of doom or callback hells.

// Syntax of simple promise:
let prom1 = new Promise((resolve, reject) => {
    let a = Math.random();
    if(a < 0.5)  {
        reject("No random number was not supporting you 1");
    }
    else {
        setTimeout(() => {
            console.log("Yes I am done 1");
            resolve("RaDin 1");
        }, 3000);
    }
})

// resolve and reject are built in argument in js resolve means job is successfully done and reject means job is failed.
let prom2 = new Promise((resolve, reject) => {
    let a = Math.random();
    if(a < 0.5)  {
        reject("No random number was not supporting you 2");
    }
    else {
        setTimeout(() => {
            console.log("Yes I am done 2");
            resolve("RaDin 2");
        }, 2000);
    }
})

let prom3 = new Promise((resolve, reject) => {
    let a = Math.random();
    if(a < 0.5)  {
        reject("No random number was not supporting you 3");
    }
    else {
        setTimeout(() => {
            console.log("Yes I am done 3");
            resolve("RaDin 3");
        }, 1000);
    }
})

// .then is used to get value or return value of promise & .catch is used to get error of program. 
// prom1.then((a) => {
//     console.log(a);
// }).catch((err)=>{
//     console.log(err)
// })

// prom2.then((a) => {
//     console.log(a);
// }).catch((err)=>{
//     console.log(err)
// })

// prom3.then((a) => {
//     console.log(a);
// }).catch((err)=>{
//     console.log(err)
// })


// There are 6 static methods of promise class.

// // (1) .all waits for all promises to resolve and return the array of their results. If any one fails, It gives error and all other results are ignored.
// let prom4 = Promise.all([prom1, prom2, prom3]);
// prom4.then((a) => {
//     console.log(a);
// }).catch(err => {
//     console.log(err);
// })

// // (2) .allSettled waits for all promises to settle and returns their results as an array of objects with status and value.
// let prom4 = Promise.allSettled([prom1, prom2, prom3]);
// prom4.then((a) => {
//     console.log(a);
// }).catch(err => {
//     console.log(err);
// })

// // (3) .race waits for the first promise to settle and its result/error becomes the output.
// let prom4 = Promise.race([prom1, prom2, prom3]);
// prom4.then((a) => {
//     console.log(a);
// }).catch(err => {
//     console.log(err);
// })

// // (4) .any waits for the first promise to fulfill and not rejected, and its result becomes the output. Throws Aggregate Error if all the promises are rejected.
// let prom4 = Promise.any([prom1, prom2, prom3]);
// prom3.then((a) => {
//     console.log(a);
// }).catch(err => {
//     console.log(err);
// })

// // (5) .resolve makes a resolved promise with the given value.
// let prom4 = Promise.resolve([prom1, prom2, prom3]);
// prom4.then((a) => {
//     console.log(a);
// }).catch(err => {
//     console.log(err);
// })

// (6) .reject makes a rejected promise with the given error.
let prom4 = Promise.reject([prom1, prom2, prom3]);
prom4.then((a) => {
    console.log(a);
}).catch(err => {
    console.log(err);
})