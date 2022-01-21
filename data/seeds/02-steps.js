exports.seed = function(knex, Promise) {
    return knex('steps').insert([   
      { step_number: 1, instructions: 'Pour 1.5 cups of Cheerios into Bowl', recipe_id: 1 },
      { step_number: 2, instructions: 'Pour 1.5 cups of milk of your choice into Bowl', recipe_id: 1 },
      { step_number: 1, instructions: 'Make sure your toaster is plugged in (your toaster can\'t toast toast if your toaster doesn\'t have the energy to get toasty)', recipe_id: 2 },
      { step_number: 2, instructions: 'Place a slice of toast into each empty toaster slot (or however many you\'d like if ur just feelin a little peckish)', recipe_id: 2 },
      { step_number: 3, instructions: 'Set settings to ur preferred level of toast and turn on toaster', recipe_id: 2 },
      { step_number: 4, instructions: 'Stare at toaster until done (DO NOT blink, blinking may interrupt the cooking process)', recipe_id: 2 },
    ]);
  };
