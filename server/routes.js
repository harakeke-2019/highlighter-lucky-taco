const express = require('express')
const router = express()
const db = require('./db')

router.get('/tacoFillings', (req, res) => {
  db.getTacos()
    .then(tacos => {
      res.json(tacos)
    })
    .catch(err => {
      res.status(500).send(err.message)
    })

  // then, catch
})

router.get('/starSigns', (req, res) => {
  db.getStarSigns() // then, catch
  res.send('starSign route')
    .then(signs => {
      res.json(signs)
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

module.exports = router
