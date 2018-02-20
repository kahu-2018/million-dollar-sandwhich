const environment = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[environment]
const connection = require('knex')(config)

function getIngredients (testDb) {
  const db = testDb || connection
  return db('ingredients').select()
}

function getIngredientsByType (type, testDb) {
  const db = testDb || connection
  return db('ingredients').select().where('type', type)
}

module.exports = {
  getIngredients,
  getIngredientsByType,
  connection
}
