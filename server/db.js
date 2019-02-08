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
  return db('taco-fillings').select()
}

function getStarSigns (db = connection) {
  return db('star-signs')
    .select()
}

function addTacoFilling (filling, db = connection) {
  return db('taco-fillings')
  .insert(filling)
}
