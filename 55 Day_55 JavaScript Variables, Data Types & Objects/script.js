console.log("Hey this class 55");

//                                     Variables in Js

// variable can be string, num, bool, and many more.
// js variables are case sensitive, It means "a" & "A" are two different variables.
// Some rules are used to naming a variable.

// var is global scoped method.
var a = 5;
var b = 6;
var c = "RaDin";

{
    var a = 55;
    console.log(a);
}
console.log(a);

console.log(a + b + 8);
console.log(typeof a, typeof b, typeof c);

// let & const are block scoped methods.
let a1 = 7;
const a2 = 7;

{
    let a1 = 55;
    console.log(a1);
}
console.log(a1);

// difference between var and const:

// var can be change.
var a3 = 1;
a3 = a3 + 3;

// const can't be change.
const a4 = 1;
// a4 = a4 + 3; // Not allowed.


//                                     Primitive Data Types

let o = "RaDin Bhai";
let p = 44;
let q = 2.44;
const r = true;
let s = undefined;
let t = null;

console.log(o, p , q, r, s, t)
console.log(typeof o, typeof p , typeof q, typeof r, typeof s, typeof t)


//                                           Objects

let u = {
    // name: "RaDin", // Both are same.
    "name": "RaDin",
    "job role": 5477,
    "is_goodlooking": true,
};

console.log(u)

u.salary = "33333$"
console.log(u)

u.salary = "55555$"
console.log(u)