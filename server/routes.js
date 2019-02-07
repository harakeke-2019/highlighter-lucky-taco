const express = require('express')
const router = express()
const db = require('./db')

router.get('/tacoFillings', (req, res) => {
  // db.getTacos() // then, catch
})

router.get('/starSigns', (req, res) => {
  // db.getStarSigns() // then, catch
  res.send('starSign route')
})

module.exports = router
