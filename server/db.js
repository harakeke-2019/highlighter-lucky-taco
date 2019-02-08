// set up database stuff
// getTacos
// getStarSigns
const environment = process.env.NODE_ENV || 'development'
const config = require('../knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getTacos,
  getStarSigns,
  addTacoFilling
}

function getTacos (db = connection) {
  const arr = getFourRandomNumbers()
  return db('taco-fillings').where('id', arr[0]).orWhere('id', arr[1]).orWhere('id', arr[2]).orWhere('id', arr[3])
}

function getFourRandomNumbers () {
  let arr = []
  while (arr.length < 4) {
    const ran = Math.floor(Math.random() * 9 + 1)
    if (!arr.find(elem => elem === ran)) arr.push(ran)
  }
  return arr
}

function getStarSigns (db = connection) {
  return db('star-signs')
    .select()
}

function addTacoFilling (filling, db = connection) {
  return db('taco-fillings')
  .insert(filling)
}
