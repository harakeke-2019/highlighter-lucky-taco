exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('taco-fillings').del()
    .then(function () {
      // Inserts seed entries
      return knex('taco-fillings').insert([
        {id: 1, name: 'tomato', image: 'tomato.jpg'},
        {id: 2, name: 'avocado', image: 'avocado.jpg'},
        {id: 3, name: 'sour cream', image: 'sourCream.jpg'},
        {id: 4, name: 'grasshopper', image: 'grasshopper.jpg'},
        {id: 5, name: 'seitan', image: 'seitan.jpg'},
        {id: 6, name: 'nutella', image: 'nutella.jpg'},
        {id: 7, name: 'chicken', image: 'chicken.jpg'},
        {id: 8, name: 'cheese', image: 'cheese.jpg'}
      ])
    })
};
