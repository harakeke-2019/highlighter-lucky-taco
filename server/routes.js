const express = require('express')
const router = express()
const request = require('superagent')
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
    .then(signs => {
      res.json(signs)
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

router.get('/quote', (req, res) => {
  const url = 'https://corporatebs-generator.sameerkumar.website/'
  request
    .get(url)
    .then(quote => {
      res.json(quote.body)
    })
    .catch(err => {
      res.status(500).send('Consuming quote api failed')
      console.error(err)
    })
})

module.exports = router
