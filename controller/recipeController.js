module.exports = {
    addRecipe: (req, res, next) => {
        const db = req.app.get('db');
        const {session} = req; 

        const {title, instructions, recipe_pic} = req.body; 
        const loadRecipe = {recipe: {}}; 

        db.recipes.insert({title, instructions, recipe_pic})
        .then((recipe) => {
            loadRecipe.recipe = recipe; 
            res.status(200).send(loadRecipe); 
        }) 
        .catch((err) => {
            res.send({success:false, err})
        })
   }, 
    addIngredients: (req, res, next) => {
        const db = req.app.get('db');
        const {session} = req; 

        const {ingredients} = req.body; 
        const loadIngredients = {ingredientsObj: {}}; 

        db.ingredient_entry.insert({ingredients})
        .then((ingredientsObj) => {
            loadIngredients.ingredientsObj = ingredientsObj; 
            res.status(200).send(loadIngredients); 
        }) 
        .catch((err) => {
            res.send({success:false, err})
        })
}, 
    addNutrients: (req, res, next) => {
        const db = req.app.get('db');
        const {session} = req; 

        const {recipe_calories, recipe_net_carbs, recipe_protein, recipe_fat, recipe_yields} = req.body; 
        const loadNutrients = {recipeNutrients: {}}; 

        db.recipe_nutrition.insert({recipe_calories, recipe_net_carbs, recipe_protein, recipe_fat,recipe_yields})
        .then((recipeNutrients) => {
            loadNutrients.recipeNutrients = recipeNutrients; 
            res.status(200).send(loadNutrients); 
        }) 
        .catch((err) => {
            res.send({success:false, err})
        })
}, 

}
    