
exports.up = knex => knex.schema.createTable('ingredients', table => {
  table.increments('id').primary()
  table.string('type')
  table.string('name')
  table.string('image_link')
})

exports.down = knex => knex.schema.dropTable('ingredients')
