// Import fs module.
import fs from "fs"

// Print all functions in fs module.
// console.log(fs);

// // writeFileSync function for writing file.
// // writeFileSync function run asynchronous means does not wait for execution.
// console.log("Starting");
// fs.writeFileSync("radin.txt", "RaDin is a good boy")
// console.log("Ending");

// // writeFile function is also for writing file.
// // writeFile function run synchronous means wait for execution.
// // writeFile is more recommended.
// console.log("Starting");
// fs.writeFile("radin.txt", "Abuzar is a good boy", ()=>{
//     console.log("done");
// })
// console.log("Ending");

// // readFile function for reading file.
// console.log("Starting");
// fs.readFile("radin.txt", (error, data)=>{
//     console.log(error, data.toString());
// })
// console.log("Ending");


// appendFile functionfor append data in existing file.
console.log("Starting");
fs.appendFile("radin.txt", "\nAbuzar is a genious", ()=>{
    console.log("done");
})
console.log("Ending");

// For more about fs module: https://nodejs.org/api/fs.html