const axios = require('axios');  

module.exports = {
    makeMeal: (req, res, next) => {
        const {session} = req; 
        const db = req.app.get('db');
        const {title, instructions, recipe_pic, ingredients} = req.body; 
        const loadMeal = {recipe: {}, savedIngredients : {}, nutrition: {}}; 

        db.recipes.insert({title, instructions, recipe_pic, user_id : session.user.user_id})
        .then((recipe) => {
            loadMeal.recipe = recipe; 
            const ingredientPromises = ingredients.map((e, i, a) => {
                return db.ingredient_entry.insert({ingredient :e, user_id : session.user.user_id, recipes_id: recipe.recipes_id})
            })
            return Promise.all(ingredientPromises) 
        })
        .then((savedIngredients) => {
            loadMeal.savedIngredients = savedIngredients; 
            let config = {
                headers: {
                  'Content-Type': 'application/json' 
                }
            }
            let recipeAnalysis = {
                title: title,
                ingr : ingredients
            }; 
            return axios.post(`https://api.edamam.com/api/nutrition-details?app_id=1476c8c7&app_key=a77d6976afe7c2ed195b70536e293653`,recipeAnalysis ,config)
        })
        .then((nutrition) => {
            let servings = nutrition.data.yield; 
            let carb = nutrition.data.totalNutrients.CHOCDF.quantity; 
            let fiber = nutrition.data.totalNutrients.FIBTG.quantity; 
            let netCarbs = carb - fiber; 
            let netCarbServing = netCarbs / servings; 
            let cal = nutrition.data.calories; 
            let calServing = cal / servings; 
            let fats = nutrition.data.totalNutrients.FAT.quantity; 
            let fatServing = fats / servings; 
            let proteins = nutrition.data.totalNutrients.PROCNT.quantity; 
            let proteinServing = proteins / servings; 

            return db.recipe_nutrition.insert({recipe_calories: calServing, recipe_net_carbs: netCarbServing , recipe_fat: fatServing, recipe_protein: proteinServing, user_id: session.user.user_id, recipes_id: loadMeal.recipe.recipes_id, recipe_yields: servings})
        })
        .then((nutritionObj)=> {
            loadMeal.nutrition = nutritionObj; 
            res.send(loadMeal); 
        })
        .catch((err) => {
            res.send({success:false, err})
        })
    } 
}  // db.recipe.find({user_id: session.user.user_id})

    // retrieveRecipes : (req, res, next) => {
    //     const db = req.app.get('db');
    //     const {recipe_id} = req.session; 
    //     const {session} = req; 
    //     const loadRecipes = {user: session.user, recipes: {}};
    //     if (session.user){
    //         db.recipes.findOne({user_id:session.user.user_id})
    //         .then((recipes) => {
    //             loadRecipes.recipes=recipes; 
    //             res.send(loadRecipes)
    //         })
    //     } else {
    //         res.send(false)
    //     }
    // }
// }
    