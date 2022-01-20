exports.seed = function(knex, Promise) {
    return knex('recipes').insert([   
      { recipe_name: 'Bowl of Cheerios' },
      { recipe_name: 'Toast' }
    ]);
  };
  