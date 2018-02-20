
exports.up = knex => knex.schema.createTable('sand_ing', table => {
  table.integer('sandwich_id')
  table.integer('ingredient_id')

})

exports.down = knex => knex.schema.dropTable('sand_ing')