
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('sand_ing').del()
    .then(function () {
      // Inserts seed entries
      return knex('sand_ing').insert([
        {sandwich_id: 1, ingredient_id: 2},
        {sandwich_id: 1, ingredient_id: 5},
        {sandwich_id: 1, ingredient_id: 7},
        {sandwich_id: 1, ingredient_id: 10},
        {sandwich_id: 2, ingredient_id: 3},
        {sandwich_id: 2, ingredient_id: 6},
        {sandwich_id: 2, ingredient_id: 9},
        {sandwich_id: 2, ingredient_id: 11},
      ]);
    });
};