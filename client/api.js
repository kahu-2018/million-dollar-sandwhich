import request from 'superagent'

var ingredientsUrl = '/api/ingredients' 

export function getIngredients (callback, type) {
  request
    .get(ingredientsUrl)
    .then (ingredients => { 
      
      // if (err) {
      //   callback (err)
      
        var data = ingredientsByType(type, ingredients.body)
        callback(data)
       
    })
}

function ingredientsByType (type, data) {
  var stuff = []
  data.ingredients.map(ingredient => {
    if (ingredient.type === type){
      stuff.push(ingredient)
      }
  })
  return stuff
}

