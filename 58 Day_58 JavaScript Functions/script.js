// JavaScript Functions:

// Functions are used in situation where we use a block of code repeatedly by simply changing arguments of functions.
console.log("Hey RaDin are you fine?")
console.log("Hey RaDin are you better?")
console.log("Hey RaDin are you good?")
console.log("Hey RaDin are you excellent?")

// Basic Function:
function fine(name) {
    console.log("Hey " + name + " are you fine?")
    console.log("Hey " + name + " are you better?")
    console.log("Hey " + name + " are you good?")
    console.log("Hey " + name + " are you excellent?")
}
fine("Abuzar")
// Syntax:     function func_name(parameters) {
//                 statement...
//             }
//             func_name(arguments)

function sum(a, b) {
    console.log(a + b)
    // Through return statement we use a function's value as variable.
    return a + b
}
result = sum(3, 5)
console.log("The sum of two numbers is:", result)

// We can also define the paramenters.
function sum_of_three_nums(a, b, c = 8) {
    console.log(a + b + c)
    return a + b + c
}
// result = sum_of_three_nums(3)
// result = sum_of_three_nums(3, 5)
result = sum_of_three_nums(3, 5, 7)
console.log("The sum of three numbers is:", result)


// Arrow Function:
const my_func = (x) => {
    console.log("I am from an arror function", x)
}
my_func(35)
// Through Arror functions we can use a variable as function, And also we use them in another function.