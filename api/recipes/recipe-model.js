const db = require('../../data/db_configs.js');

async function getRecipeById(recipe_id) {
    const rows = await db('recipes as r')
        .leftJoin('steps as st', 'r.recipe_id', 'st.recipe_id')
        .select('r.recipe_id as recipe_id', 'recipe_name', 'step_id', 'step_number', 'instructions')
        .orderBy('step_number', 'asc')
        .where('r.recipe_id', recipe_id);

    const ingredientQuantities = await db('steps as st')
        .join('step_ingredients as st_in', 'st.step_id', 'st_in.step_id')
        .join('ingredients as in', 'in.ingredient_id', 'st_in.ingredient_id')
        .select('in.ingredient_id', 'ingredient_name', 'quantity', 'st.step_id', 'st_in.step_id')
        .where('st.recipe_id', recipe_id);


    const result = {
        recipe_id: rows[0].recipe_id,
        recipe_name: rows[0].recipe_name,
        steps: rows.reduce((steps, step) => {
            if(!step.step_id) return steps;
            const ingredients = [];
            ingredientQuantities.forEach(element => {
                if (element.step_id === step.step_id) {
                    ingredients.push({ ingredient_id: element.ingredient_id, ingredient_name: element.ingredient_name, quantity: element.quantity });
                }
            })
            const { step_id, step_number, instructions } = step;
            return steps.concat({ step_id, step_number, instructions, ingredients: ingredients });
          }, [])
    }

    return result;
}

module.exports = { getRecipeById };