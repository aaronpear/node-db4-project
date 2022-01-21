const express = require('express');
const Recipes = require('./recipe-model.js');

const router = express.Router();

router.get('/:recipe_id', async (req, res, next) => {
    try { 
        const recipe = await Recipes.getRecipeById(req.params.recipe_id);
        if (!recipe) {
            res.json({ status: 404, message: 'Recipe with given id not found' });
        } else {
            res.json(recipe);
        }
    } catch (err) {
        next(err);
    }
})

module.exports = router;