exports.seed = function(knex, Promise) {
    return knex('step_ingredients').insert([   
      { quantity: '1.5 cups', step_id: 1, ingredient_id: 2 },
      { quantity: '1.5 cups', step_id: 2, ingredient_id: 1 },
      { quantity: 'X slices', step_id: 4, ingredient_id: 3 },
    ]);
  };
