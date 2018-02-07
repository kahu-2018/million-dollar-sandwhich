exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('pets', (table) => {
    table.increments('id')
    table.string('name')
    table.integer('species_id')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('pets')
}
