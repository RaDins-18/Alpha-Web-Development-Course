// There are two ways for importing modules:

// 1. Commonjs
// 2. Module


// 1. CommonJs:
// // If we use package type commonjs so we can import modules with require.
// const { createServer } = require("node:http");

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/html');
//   res.end('<h1>Hello World</h1>');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });


// // We can also import functions, variables and many more from a file.

// const obj = require("./common_module.js")
// console.log(obj);


// 2. Module:
// But if we use package type module so we use import for importing modules.
import { createServer } from "http";

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1>Hello World</h1>');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});


// We can also import functions, variables and many more from a file.

// Named importing.
import {a, b, c, d, e} from "./esma_script_ES6_module.js"
console.log(a, b, c, d, e);

// Default importing and also default import does not carry curly brackets.
import obj from "./esma_script_ES6_module.js"
console.log(obj);