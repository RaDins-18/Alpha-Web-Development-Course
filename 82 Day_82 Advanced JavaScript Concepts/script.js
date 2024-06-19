// Advanced Concepts Of JavaScript:

// IIFE:
// Async function.
async function sleep() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(45)
        }, 1000);
    })
}
// If we want to await a async function directly it gives an error.
// let a = await sleep(); // SyntaxError: await is only valid in async functions and the top level bodies of modules.
// let b = await sleep(); // SyntaxError: await is only valid in async functions and the top level bodies of modules.
// So, we use IIFE method (Immediately Invoked Function Expression).
// Syntax of IIFE is:  (async function name(){
//                         await sleep();
//                     })()
(async function main(){
    console.log(x); // Hoisting

    let a = await sleep();
    console.log(a);
    let b = await sleep();
    console.log(b);

    // Destructuring:
    let o, p = [1, 5]
    console.log(o, p); // It gives o is undefined and p is [1, 5].
    // But if we want o is 1 and p is 5. So, we write code like this.
    let [q, r] = [1, 5]
    console.log(q, r);
    // But there is a catch if there are more numbers. So, we use ...rest variable.
    let [s, t, ...rest] = [1, 5, 6, 7, 8, 9, 10]
    console.log(s, t, rest);
    // Destructuring is also used in objects.
    let obj = {
          u: 1,
          v: 2,
          w: 3
    }
    let {u, v} = obj
    console.log(u, v);
    
    // Spread operator (...):
    let arr = [1, 3, 5];
    console.log(arr[0] + arr[1] + arr[2]);
    // Methods of adding array values.
    let sum = (a, b, c) => {return a + b + c};
    console.log(sum(arr[0], arr[1], arr[2]));
    // (...) spread operator is used to spread the values of an array.
    console.log(sum(...arr));

    // Hoisting:
    // Hoisting refers to the process wherly the interpreter appears to move the declarations to the top of the code before execution, Variables can thus be referenced before they are declared in javascript but it is only work on var not on let and const, It is also applicable in functions.
    var x = 6;
})()
