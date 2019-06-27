
import React, { Component } from 'react'
import axios from 'axios'; 
import { connect } from 'react-redux';
import Nav from '../nav/Nav' ; 
import './MealCard.css'; 
import * as actions from '../../Ducks/action_creator';
import IngredientsList from './IngredientsList'; 
 

class MealCard extends Component {
    state = {
        recipes: '', 
        calories: '',
        recipe_calories: '',
        net_carbs : '',
        recipe_net_carbs: '',
        protein: '',
        recipe_protein: '',
        fat: '',
        recipe_fat: '',
        title: '',
        instructions: '',
        recipe_pic: '',
        listOfRecipes: [],
        listOfIngredients: [],
        listOfNutrition: []
    }

    componentDidMount(){
        this.getThisRecipe(); 
    }

    getThisRecipe = () => {
        //    debugger; 
           axios.get(`/api/recipe/retrieveOne/?recipes_id=${this.props.match.params.recipes_id}`).then((res) => {
            //    debugger; 
                   this.setState({
                        title: res.data.recipes.title,
                        recipe_pic: res.data.recipes.recipe_pic,
                        instructions: res.data.recipes.instructions, 
                        listOfIngredients: res.data.ingredients,
                        recipe_calories: res.data.nutrition.recipe_calories,
                        recipe_protein: res.data.nutrition.recipe_protein,
                        recipe_net_carbs: res.data.nutrition.recipe_net_carbs,
                        recipe_fat: res.data.nutrition.recipe_fat,
                        recipe_yield: res.data.nutrition.recipe_yields 
                    })
                    console.log(this.state.title, this.state.listOfIngredients, this.state.recipe_calories, 'recipe get data')
        }) 
    } 



    render() {
        // debugger; 

        const ingredientsArr = this.state.listOfIngredients.map((e, i) => {
            return <IngredientsList key={i} index={i} ingredient={e.ingredient}/> 
        })

        let remainderCals = this.props.calories - this.state.recipe_calories; 
        let remainderCarbs = this.state.net_carbs - this.state.recipe_net_carbs; 
        let remainderProtein = this.state.protein - this.state.recipe_protein; 
        let remainderFat = this.state.fat - remainderCarbs; 

        return (
            <div className='mealCardPage'>
                 <div>
                <div>
                    <h2 className='titlePage'>Meal</h2> 
                </div>
                <div className='homePage'>
                    {this.props.location.pathname !== '/' ? <Nav/> : ' '}
                </div>
                </div>
            <div>
            <div className='lunchCard'>
                <div>
                    <div>
                        <h1>{this.state.title}</h1>
                    </div>
                        <div className='recipeDetails'>
                            <div>
                                <div className='ingredientsBox'>
                                    Ingredients List: 
                                    {ingredientsArr}
                                </div>
                            </div>
                                    <div className='usersMealMacros'>
                                        <h2> Meal's Macros:</h2>
                                        <h3 className=''>Yields:{this.props.recipe_yield}</h3>
                                        <h3 className='perServing'> Macros Per Serving</h3>
                                        <h3 className=''>Calories: {this.props.recipe_calories}</h3>
                                        <h3 className =''>Net Carbs: {this.props.recipe_net_carbs} </h3>
                                        <h3 className ='' id=''>Protein: {this.props.recipe_protein} </h3>
                                        <h3 className =''>Fat: {this.props.recipe_fat} </h3>
                                    </div>
                                    <div className='usersMealMacros'>
                                        <h2> Daily Remainder:</h2>
                                        <h3 className=''>Calories: {remainderCals}</h3>
                                        <h3 className =''>Net Carbs: {remainderCarbs}</h3>
                                        <h3 className ='' id=''>Protein: {remainderProtein}</h3>
                                        <h3 className =''>Fat: {remainderFat}</h3>
                                    </div>
                            </div> 
                        </div>
                        <div className='instructImage'>
                            <div className='instructionsBox'></div>
                            <div className='mealCardImage'>
                            </div>
                        </div>
                </div>
            </div>

            </div>
        )
    }
}

export default connect(state => state, actions)(MealCard);
