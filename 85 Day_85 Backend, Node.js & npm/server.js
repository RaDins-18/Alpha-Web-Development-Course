// Introduction of backend.

// Backend is usually written in nodejs. Basically NodeJS is the V8 engine of web browsers and Ryan Dahl the creator of nodejs first write it into server side.

// NPM is stands for Node Package Manager through npm we can create an node package.

// "npm init" for setup an node package.

// "npm i module-name" or "npm install module-name" for add an external module.

// package.json file contains all data about node package and if delete node_modules folder but our package.json file have dependences, So if we write only "npm i" so it automatically install all modules.

// Documentation of nodejs: https://nodejs.org/en/learn/getting-started/introduction-to-nodejs

var slugify = require('slugify')

let a = slugify('some string') // some-string
console.log(a);

// if you prefer something other than '-' as separator
const b = slugify('some string(^&%#@!', '_')  // some_string
console.log(b);