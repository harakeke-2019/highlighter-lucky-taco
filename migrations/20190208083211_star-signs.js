
exports.up = function (knex, Promise) {
    return knex.schema.createTable('star-signs', function (table) {
      table.increments('id').primary()
      table.string('name')
      table.string('date')
    })
  }
  
  exports.down = function (knex, Promise) {
    return knex.schema.dropTable('star-signs')
  }