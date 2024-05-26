console.log("All About Strings")

// String Slicing.
let a = "RaDin";
console.log(a[0])
console.log(a[1])
console.log(a[2])
console.log(a[3])
console.log(a[4])
console.log(a[5])
console.log(a.slice(1))
console.log(a.slice(2, 5))

// Length property is used to find length of string.
console.log(a.length)

let my_name = "Abuzar"
let my_friend = "Faizan"
// If we want to type a line of string and in which we use variable, So instead of this we use template litrals method.
console.log("His name is " + my_name + " and his friends name is " + my_friend + ".")
// This method in js is called template litrals (`String`).
// We can also insert variable in strings and this method is called string interpolation in js (`String ${my_name} String`).
console.log(`His name is ${my_name} and his friends name is ${my_friend}.`)

// Escape Sequence.
// There are three main escape sequence in js:
// \n --> for new line.
// \t --> for tab.
// \r --> for carriage return.

// String Functions.
let b = "Rohan"
console.log(b.toUpperCase())
console.log(b.toLowerCase())

// Differnce between function and property:
// Function use parentheses.
// Property does not use parentheses.

// We replace any letter in a string by replace() method.
console.log(b.replace("han", "man"))

// Concat method is used to add strings, we can do it by + operator also.
console.log(a.concat(b, "Arham", "Safwan"))

// Most important thing is strings are immutable. It means if we use functions and properties on a string variable so it makes copy of original variable and the original variable does not change.