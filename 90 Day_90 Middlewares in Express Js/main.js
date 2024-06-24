import express from "express"
import fs from "fs"
import blog from "./routes/blog.js"

const app = express()
const port = 3000

// What is Middleware in Express JS. Middleware is a request handler that allows you to intercept and manipulate requests and responses before they reach route handlers. They are the functions that are invoked by the Express. js routing layer.

// Middleware modifies the request and can send response and also send control to next middleware.
app.use(express.static('public'))
app.use('/blog', blog)

// Middleware 1 - Logger for our application.
const myLogger = function (req, res, next) {
  // console.log(req.headers); // Header of request.
  req.radin = " I am RaDin"; // We can modify the header of request.

  console.log('M1');
  fs.appendFileSync("logs.txt", `${new Date()} and it is a ${req.method} request.\n`);

  // res.send("Hacked by Middleware 1") // Through res.send we can send response to request.
  next() // Through next() a middleware send control to next middleware.
}
app.use(myLogger)

// Middleware 2.
app.use((req, res, next) => {
  req.radin = " I am Abuzar"; // We can modify the header of request.

  console.log('M2')
  next()
})

app.get('/', (req, res) => {
  res.send('Hello World!' + req.radin)
})
app.get('/about', (req, res) => {
  res.send('Hello About!' + req.radin)
})
app.get('/contact', (req, res) => {
  res.send('Hello Contact!' + req.radin)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


// // An Express application can use the following types of middleware:

// // • Application-level middleware
// // • Router-level middleware
// // • Error-handling middleware
// // • Built-in middleware
// // • Third-party middleware

// // 1. Application-level middleware
// // This example shows a middleware function with no mount path. The function is executed every time the app receives a request.

// import express from 'express'
// const app = express()

// app.use((req, res, next) => {
//   console.log('Time:', Date.now())
//   next()
// })


// // 2. Router-level middleware
// // Router-level middleware works in the same way as application-level middleware, except it is bound to an instance of express.Router().

// import express from 'express'
// import blog from "./routes/blog.js"

// const app = express()

// // mount the router on the app
// app.use('/', router)

// // ---------------------------------------------------------------------------------------

// import express from 'express'
// const router = express.Router()

// // a middleware function with no mount path. This code is executed for every request to the router
// router.use((req, res, next) => {
//   console.log('Time:', Date.now())
//   next()
// })

// export default router


// // 3. Error-handling middleware
// // Error-handling middleware always takes four arguments. You must provide four arguments to identify it as an error-handling middleware function. Even if you don’t need to use the next object, you must specify it to maintain the signature. Otherwise, the next object will be interpreted as regular middleware and will fail to handle errors.

// app.use((err, req, res, next) => {
//   console.error(err.stack)
//   res.status(500).send('Something broke!')
// })


// // 4. Built-in middleware
// // Starting with version 4.x, Express no longer depends on Connect. The middleware functions that were previously included with Express are now in separate modules; see the list of middleware functions.

// // Express has the following built-in middleware functions:

// // • express.static serves static assets such as HTML files, images, and so on.
// // • express.json parses incoming requests with JSON payloads. NOTE: Available with Express 4.16.0+
// // • express.urlencoded parses incoming requests with URL-encoded payloads. NOTE: Available with Express 4.16.0+


// // 5. Third-party middleware
// // Use third-party middleware to add functionality to Express apps.

// // Install the Node.js module for the required functionality, then load it in your app at the application level or at the router level.

// // The following example illustrates installing and loading the cookie-parsing middleware function cookie-parser.

// // $ npm install cookie-parser
// import express 'express'
// const app = express()
// import cookieParser from 'cookie-parser'

// // load the cookie-parsing middleware
// app.use(cookieParser())