
export const setUser = (user) => {
    return {
        type:"setUser",
        payload:user,
    }
}  

export const setMacros = (macros) => {
    return {
        type:"setMacros",
        payload:macros,
    }
} 

export const setWeight = (weight) => {
    return {
        type:"setWeight",
        payload:weight,
    }
} 

export const setLife = (life) => {
    return {
        type:"setLife",
        payload:life,
    }
}  

export const setGroceries = (groceries) => {
    return {
        type:"setGroceries",
        payload: groceries, 
    }
}  

export const setRecipe = (recipe) => {
    return {
        type:"setRecipe",
        payload:recipe,
    }
} 

export const setIngredients = (ingredients) => {
    return {
        type:"setIngredients",
        payload:ingredients,
    }
} 

export const setRecipeNutrition = (recipeNutrition) => {
    return {
        type:"setRecipeNutrition",
        payload:recipeNutrition,
    }
} 