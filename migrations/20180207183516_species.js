
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('species', t => {
    t.increments('id')
    t.string('name')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('species')
};
