// Express is a lightweight and flexible routing framework with minimal core features meant to be augmented through the use of Express middleware modules.

const express = require('express')
const app = express()

// app.get or app.post or app.put or app.delete(path, handler)
app.get('/home', function (req, res) {
  res.send('Hello Home')
})
app.get('/about', function (req, res) {
  res.send('Hello About')
})
app.get('/contact', function (req, res) {
  res.send('Hello Contact')
})
app.get('/blog', function (req, res) {
  res.send('Hello Blog')
})

// This code is not mentainable.
// app.get('/blog/intro-to-js', function (req, res) {
//   // logic to fetch into-to-js from db.
//   res.send('Hello Intro To JS')
// })
// app.get('/blog/intro-to-python', function (req, res) {
//   // logic to fetch into-to-python from db.
//   res.send('Hello Intro To Python')
// })

// So we use url parameters.
app.get('/blog/:slug/', function (req, res) {
  console.log(req);

  // For this URL: http://127.0.0.1:3000/blog/intro-to-mongo?mode=dark&region=pk
  console.log(req.params); // Will output { slug: 'intro-to-mongo' }
  console.log(req.query); // Will output { mode: 'dark', region: 'pk' }

  // logic to fetch {slug} from db.
  res.send(`Hello ${req.params.slug}`)
})
app.get('/blog/:slug/:second', function (req, res) {
  // logic to fetch {slug} and {second} from db.
  res.send(`Hello ${req.params.slug} and ${req.params.second}`)
})

// If we search main.js in url server shows main.js is not found for backend security purposes. but if we want to serve any file so we make a folder pulic and paste public files in public folder, Now all files in public folder will serve.
app.use(express.static('public'))

app.listen(3000)