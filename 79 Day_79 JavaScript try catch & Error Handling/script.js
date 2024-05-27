// Throw error handling we can continue the program if the error occours.

// JS is a forgiving language so it does not throws error usually, but some times we want to throw an error.

// let a = prompt("Enter first number");
// let b = prompt("Enter second number");
let a = 5;
let b = 5;
// let x = 1;

if (isNaN(a) || isNaN(b)) {
    // We can create our own custom errors and throw it.
    throw SyntaxError("Sorry this is not allowed")
}

let sum = parseInt(a) + parseInt(b);

function main() {
    // Throw try and catch we can handle errors.
    // try is used to try to execute the code properly.
    try {
        console.log("The sum of a and b is", sum*x);
        return true
    }
    // If try is failed then throw catch we can show an error.
    // If no error detectd then catch will be ignored.
    catch (error) {
        // error is the object of catch.
        console.log(error);
        console.log(error.name);
        console.log(error.message);
        console.log(error.stack);
        console.log("Error detected");
        return false
    }
    // We can also use finally with try and catch.
    // finally is used to finshed the program.
    // Main use of finally is to execute the script after the return statement in a function.
    finally{
        console.log("Files are being closed");
    }
}

let c = main();
console.log(c);