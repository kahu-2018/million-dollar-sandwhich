
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('species').del()
    .then(function () {
      // Inserts seed entries
      return knex('species').insert([
        {id: 1, name: 'Rat'},
        {id: 2, name: 'Dog'},
        {id: 3, name: 'Guinea Pig'}
      ]);
    });
};
