const express = require('express')
require('dotenv').config()

console.log(process.env.PASSWARD) // remove this after you've confirmed it is working

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})