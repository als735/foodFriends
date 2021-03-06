
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
        }) 
    } 



    deleteThisRecipe = () => {
        // debugger; 
        axios.delete(`/api/recipe/delete?recipes_id=${this.props.match.params.recipes_id}`).then(({data}) => {
            // debugger; 
            if (data) {
                this.props.setRecipe(data.recipes); 
                this.props.history.push('/home');
            } else {
                alert('Could not delete')
            }
        })
    }



    render() {
        debugger; 

        const ingredientsArr = this.state.listOfIngredients.map((e, i) => {
            return <IngredientsList key={i} index={i} ingredient={e.ingredient}/> 
        })

        console.log(this.state, 'state')

        let calories = this.props.macros.calories; 
        let recipe_calories = this.state.recipe_calories; 


        let remainderCals = calories - recipe_calories; 
        let remainderCarbs = this.props.macros.net_carbs - this.state.recipe_net_carbs; 
        let remainderProtein = this.props.macros.protein - this.state.recipe_protein; 
        let remainderFat = this.props.macros.fat - this.state.recipe_fat; 

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
                        <h1 className='recipeTitle'>{this.state.title}</h1>
                    </div>
                        <div className='recipeDetails'>
                            <div>
                                <div className='ingredientsBox'>
                                    <h2 className='list'>Ingredients List: </h2>
                                    <div className='list'>{ingredientsArr}</div>
                                </div>
                            </div>
                                    <div className='usersMealMacros'>
                                        <h2> Meal's Macros:</h2>
                                        <h3 className=''>Yields:{this.state.recipe_yield}</h3>
                                        <h3 className='perServing'> Macros Per Serving</h3>
                                        <h3 className=''>Calories: {this.state.recipe_calories}</h3>
                                        <h3 className =''>Carbs: {this.state.recipe_net_carbs} </h3>
                                        <h3 className ='' id=''>Protein: {this.state.recipe_protein} </h3>
                                        <h3 className =''>Fat: {this.state.recipe_fat} </h3>
                                    </div>
                                    <div className='usersMealMacros'>
                                        <h2> Daily Remainder:</h2>
                                        <h3 className=''>Calories: {remainderCals}</h3>
                                        <h3 className =''>Carbs: {remainderCarbs}</h3>
                                        <h3 className ='' id=''>Protein: {remainderProtein}</h3>
                                        <h3 className =''>Fat: {remainderFat}</h3>
                                    </div>
                            </div> 
                        </div>
                        <div className='instructImage'>
                            <div className='instructionsBox'><h2>Instructions:</h2><div className='list'>{this.state.instructions}</div></div>
                            <img className='mealCardImage' src={this.state.recipe_pic} alt=''/>
                        </div>
                        <button className='deleteMealButt' onClick={ () => {this.deleteThisRecipe()}}>Delete Meal</button>

                </div>
            </div>

            </div>
        )
    }
}

export default connect(state => state, actions)(MealCard);
