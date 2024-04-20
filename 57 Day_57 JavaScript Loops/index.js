console.log("I am a tutorial on Loops")


// Importans of Loops:

// So, if we want to print numbers 1 to 100. Instead of this we use loops.
let a = 1
console.log(a)
console.log(a+1)
console.log(a+2)

// Loops are used in these types of conditions.
for (let a = 1; a <= 100; a++) {
    console.log(a)
}


// Types of Loops:

// There are mainly two types of loops:
// 1. for-loop
// 2. while-loop

// 1. for-loop is categorized into three types:
//  1. forin-loop
//  2. forof-loop
//  3. foreach-loop

// 2. while-loop has a branch:
//  1. dowhile-loop


// For Loop:
for (let i = 0; i < 50; i++) {
    console.log("For Loop " + i)
}
// Basic Structure of for-loop:
// for (variable-initialization; condition-testing; increment-variable-value) {
//     statement...
// }

// Forin Loop:
let obj = {
    name: "RaDin",
    role: "Programmer",
    company: "Google"
}
for (const key in obj) {
    const value = obj[key];
    console.log(key, value)
}

// Forof Loop:
for (const c of "Character") {
    console.log(c)
}

// While Loop:
let i = 5
while (i <= 10) {
    console.log(i)
    i++
}

// Dowhile Loop:
let e = 20
do {
    console.log(e)
    e++
} while (e < 5);