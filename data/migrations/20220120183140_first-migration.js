exports.up = async function(knex) {
    await knex.schema
        .createTable('recipes', table => {
            table.increments('recipe_id');
            table.text('recipe_name', 128).notNullable().unique();
        })
        .createTable('steps', table => {
            table.increments('step_id');
            table.integer('step_number')
                .unsigned()
                .notNullable();
            table.text('instructions', 512).notNullable();
            table.integer('recipe_id')
                .unsigned()
                .notNullable()
                .references('recipe_id')
                .inTable('recipes')
                .onDelete('CASCADE');
        })
        .createTable('ingredients', table => {
            table.increments('ingredient_id');
            table.text('ingredient_name', 128).notNullable();
        })
        .createTable('step_ingredients', table => {
            table.increments('step_ingredients_id');
            table.text('quantity', 64).notNullable();
            table.integer('step_id')
                .unsigned()
                .notNullable()
                .references('step_id')
                .inTable('steps')
                .onDelete('CASCADE');
            table.integer('ingredient_id')
                .unsigned()
                .notNullable()
                .references('ingredient_id')
                .inTable('ingredients')
                .onDelete('CASCADE');

        })
};

exports.down = async function(knex) {
    await knex.schema
        .dropTableIfExists('recipes')
        .dropTableIfExists('steps')
        .dropTableIfExists('ingredients')
        .dropTableIfExists('step_ingredients')
};
