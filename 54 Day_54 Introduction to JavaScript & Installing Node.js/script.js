// Introduction to Js

// JavaScript is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else. (Okay, not everything, but it is amazing what you can achieve with a few lines of JavaScript code.)

// alert, prompt, confirm in js.

// Alert in js display a message on the top of the page.
alert("Hello World!");

// Through console.log() a message is display on the terminal.
console.log("Code is running...");
console.log("Code is also running...");
console.log("Code is looking like wow...");

// Prompt in js get a message on the top of the page.
var a = prompt("Enter your num");

console.log("Your num is", a);
console.log("Your num is "+ a);

// Confirm in js ask permission(Ok, Cancel) on the top of the page.
var isTrue = confirm("Are you sure you want to leave this page?");

// If the confirm value is "OK" then the code below will run.
if(isTrue){
    console.log("Computer is blasting.");
}
// If the confirm value is "Cancel" then the code below will run.
else{
    console.log("Computer is not blasting.");
}

// Through this we can set, get, and modified HTMl & CSS properties.
document.title = "Hey I am Introduction to Js";
document.body.style.backgroundColor = "cyan";