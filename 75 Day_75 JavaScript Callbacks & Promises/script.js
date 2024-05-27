// Asynchronous Nature:

// The asynchronous nature of javascript is that if the program is running on its normal flow, But it has to wait for a function, So it does not follow the flow of program. It leaves that that waiting function and execute it after the remaining code.

console.log("I am a Hacker");
console.log("I am also a Hacker");

// It waits for 2 sec, So it will be executed after the below code.
setTimeout(() => {
    console.log("I am inside setTimeout");
}, 2000);

// It waits for 2 sec, So it will be executed after the below code.
setTimeout(() => {
    console.log("I am also inside setTimeout");
}, 2000);

console.log("The End");


// Callback Functions:

// Callback function is a normal function, This method is used to call a function inside another function.
const callback = (arg) => {
    console.log(arg);
}
// Callback function is used & defined as an argument, And we can use it as an argument in the function.
const loadScript = (sr, callback) => {
    let script = document.createElement("script");
    script.src = sr;
    script.onload = callback("RaDin");
    document.head.append(script);
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback);