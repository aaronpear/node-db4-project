exports.seed = function(knex, Promise) {
    return knex('ingredients').insert([   
      { ingredient_name: 'Milk' },
      { ingredient_name: 'Cheerios' },
      { ingredient_name: 'Bread' },
      { ingredient_name: 'Cajun Seasoning' }
    ]);
  };
