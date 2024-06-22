const express = require('express')

const blog = require('./routes/blog')
const shop = require('./routes/shop')
const app = express()
const port = 3000

app.use(express.static("public"))
app.use('/blog', blog)
app.use('/shop', shop)

// Get request is default request. Get is used to request data from a specified resource. Get requests can be cached, Get requests remain in the browser history.
app.get('/', (req, res) => {
  console.log("Hey its a get request.");
  res.send('Hello World Get! 1')
})

// Post request is more secrue than Get request, Post request is used when uploading a file or when submitting a completed web form or sending secure data to server.
app.post('/', (req, res) => {
  console.log("Hey its a post request.");
  res.send('Hello World Post! 2')
})

// Put is used to send data to a server to create/update a resource. The difference between Post and Put is that Put requests are idempotent. That is, calling the same Put request multiple times will always produce the same result.
app.put('/', (req, res) => {
  console.log("Hey its a put request.");
  res.send('Hello World Put! 3')
})

// Delete requests are made for deleting the specified resource (file, record etc).
app.delete('/', (req, res) => {
  console.log("Hey its a delete request.");
  res.send('Hello World Delete! 4')
})


// // We use chainging of requests if the end point is same.
// app.get('/', (req, res) => {
//   console.log("Hey its a get request.");
//   res.send('Hello World Get!')
// }).post('/', (req, res) => {
//   console.log("Hey its a post request.");
//   res.send('Hello World Post!')
// }).put('/', (req, res) => {
//   console.log("Hey its a put request.");
//   res.send('Hello World Put!')
// }).delete('/', (req, res) => {
//   console.log("Hey its a delete request.");
//   res.send('Hello World Delete!')
// })


// Serve ststic templates.
app.get('/index', (req, res) => {
  console.log("Hey its index.");
  res.sendFile('templates/index.html', {root: __dirname})
})
app.get('/api', (req, res) => {
  res.json({a:1, b:2, c:3, name: ["RaDin", "Abuzar"]})
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})