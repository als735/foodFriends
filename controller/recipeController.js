module.exports = {
    addRecipe: (req, res, next) => {
        const db = req.app.get('db');
        const {session} = req; 

        const {ingredients, title, instructions, recipe_calories, recipe_net_carbs, recipe_fat, recipe_protein, recipe_pic, recipe_id} = req.body; 

        const loadRecipe = {ingredients: {}, recipe: {}}; 
        
        db.recipes.insert({title, instructions, recipe_calories, recipe_net_carbs, recipe_fat, recipe_protein, recipe_pic})
        .then((ingredients) => {
            loadRecipe.recipe = recipe
            return db.ingredient_entry.insert({ingredients, recipe_id})
        })
        .then((recipe)=>{
            loadRecipe.ingredients = ingredients; 
            res.send(loadRecipe); 
        })
        .catch((err) => {
            res.send({success:false, err})
        })
    }
}