import React from "react";
import { Switch, Route } from "react-router-dom";

import Auth from "./Components/auth/Auth"; 
import Goals from "./Components/goals/Goals"; 
// import Grocery from "./Components/grocery/Grocery"; 
import Home from "./Components/home/Home"; 
import LunchBox from "./Components/lunchBox/LunchBox"; 
import MealCard from "./Components/mealCard/MealCard"; 
import Plan from "./Components/plan/Plan"; 
import RecipeForm from "./Components/recipeForm/RecipeForm"; 
import Register from "./Components/register/Register"; 

export default ( 
    <Switch>
        <Route exact path="/" component={Auth}/>
        <Route path="/goals" component={Goals}/>
        {/* <Route path="/groceryList" component={Grocery}/> */}
        <Route path="/home" component={Home}/>
        <Route path="/lunchBox" component={LunchBox}/>
        <Route path="/mealCard/:recipes_id" component={MealCard}/> 
        <Route path="/planning" component={Plan}/>
        <Route path="/recipeForm" component={RecipeForm}/>
        <Route path="/register" component={Register}/>
    </Switch>
)