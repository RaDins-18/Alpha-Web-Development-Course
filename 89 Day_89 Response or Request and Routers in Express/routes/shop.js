const express = require('express')
const router = express.Router()

// Define the shop home page route.
router.get('/', (req, res) => {
  res.send('Shop page')
})
// Define the shop about route.
router.get('/about', (req, res) => {
  res.send('About shop page')
})
// Define the shop items route.
router.get('/:slug', (req, res) => {
  res.send(`${req.params.slug} item page`)
})

module.exports = router