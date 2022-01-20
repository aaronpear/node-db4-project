exports.up = async function(knex) {
    await knex.schema
        .createTable('recipes', table => {

        })
        .createTable('steps', table => {

        })
        .createTable('ingredients', table => {

        })
        .createTable('quantities', table => {

        })
};

exports.down = async function(knex) {
    await knex.schema
        .dropTableIfExists('recipes')
        .dropTableIfExists('steps')
        .dropTableIfExists('ingredients')
        .dropTableIfExists('quantities')
};
