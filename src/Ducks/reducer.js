import {combineReducers} from 'redux'

const user = (state= {}, action) => {
    switch(action.type){
        case 'setUser':
            return action.payload;
        default:
            return state;
    } 
}

const macros = (state= {}, action) => {
    switch(action.type){
        case 'setMacros':
            return action.payload;
        default:
            return state;
    } 
}

const weight = (state= {}, action) => {
    switch(action.type){
        case 'setWeight':
            return action.payload;
        default:
            return state;
    } 
}

const life = (state= {}, action) => {
    switch(action.type){
        case 'setLife':
            return action.payload;
        default:
            return state;
    } 
}

const groceries = (state= {}, action) => {
    switch(action.type){
        case 'setGroceries':
            return action.payload;
        default:
            return state;
    } 
}

const recipe = (state= {}, action) => {
    switch(action.type){
        case 'setRecipe':
            return action.payload;
        default:
            return state;
    } 
}

const ingredients = (state= {}, action) => {
    switch(action.type){
        case 'setIngredients':
            return action.payload;
        default:
            return state;
    } 
}

const recipeNutrition = (state= {}, action) => {
    switch(action.type){
        case 'setRecipeNutrition':
            return action.payload;
        default:
            return state;
    } 
}

export default combineReducers({user, macros, weight, life, groceries, recipe, ingredients, recipeNutrition});