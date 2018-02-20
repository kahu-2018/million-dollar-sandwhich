
exports.up = knex => knex.schema.createTable('sandwiches', table => {
  table.increments('id').primary()
  table.integer('user_id')

})

exports.down = knex => knex.schema.dropTable('sandwiches')
