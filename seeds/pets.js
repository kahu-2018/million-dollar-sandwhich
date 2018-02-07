
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('pets').del()
    .then(function () {
      // Inserts seed entries
      return knex('pets').insert([
        {id: 1, name: 'Percy', species_id: 1},
        {id: 2, name: 'Atlas', species_id: 1},
        {id: 3, name: 'Cino', species_id: 2},
        {id: 4, name: 'Daisy', species_id: 2},
        {id: 5, name: 'Claudi', species_id: 3},
        {id: 6, name: 'Mr. Snuggles', species_id: 3}
      ]);
    });
};
