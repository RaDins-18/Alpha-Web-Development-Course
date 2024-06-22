// Routes are used to organize files

const express = require('express')
const router = express.Router()

// Define the blog home page route.
router.get('/', (req, res) => {
  res.send('Blog page')
})
// Define the blog about route.
router.get('/about', (req, res) => {
  res.send('About blog page')
})
// Define the blogpost route.
router.get('/blogpost', (req, res) => {
  res.send(`Blogpost page`)
})
// Define the blogposts route.
router.get('/blogpost/:slug', (req, res) => {
  res.send(`${req.params.slug} blog from blogposts`)
})

module.exports = router
