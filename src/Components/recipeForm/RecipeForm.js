
import React, { Component } from 'react'
// import axios from 'axios'; 
import { connect } from 'react-redux';
import Nav from '../nav/Nav' ; 
import './RecipeForm.css'; 
import * as actions from '../../Ducks/action_creator';
import axios from 'axios';


class RecipeForm extends Component {
    
    state = {
        title: '',
        recipe_pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy67qKEMJNh_JsKfsEY3BTVbfSzvXi9F0QzwgKxC9fxTzYBEIb', 
        ingredientArr : [],
        ingredient: '',
        instructions: '', 
        recipes: [],
        selectedRecipe: {},
        recipe_yield: 1 , 
        recipe_calories : '', 
        recipe_fat: '', 
        recipe_net_carbs: '',
        recipe_protein: ''
    }

    createMeal = () => {
        // debugger; 
        const mealObj = {
            title: this.state.title,
            recipe_pic : this.state.recipe_pic, 
            instructions: this.state.instructions,
            ingredients: this.state.ingredientArr,
            recipe_calories: this.state.recipe_calories,
            recipe_net_carbs: this.state.recipe_net_carbs,
            recipe_fat: this.state.recipe_fat,
            recipe_protein: this.state.recipe_protein,
            recipe_yield: this.state.recipe_yield
        }; 
        axios.post('/api/recipe/addRecipe', mealObj).then(({data}) => {
            // debugger; 
            if(data) {
                this.props.setRecipe(data.recipe);
                this.props.setIngredients(data.savedIngredients); 
                this.props.setRecipeNutrition(data.nutrition);
                this.props.history.push('/lunchBox'); 
            }
            else {
                alert('Invalid Meal Card')
            }
         })
      }; 
    
    handleInputChange= (e) => {
        const target = e.target; 
        const value = target.value; 
        const name = target.name; 
      
        this.setState({
          [name] :value
        }); 
      }

      handleIngredientsClick = (e) => {
          e.preventDefault()
          this.setState({
              ingredientArr: [...this.state.ingredientArr, this.state.ingredient]
          }) 
          this.clearIngredients(); 
       }

       clearIngredients = () => {
            this.setState({
                ingredient: ''
            })
       }


    render() {
        console.log('props', this.props)

        let list = this.state.ingredientArr.map((ingredient,i)=> { // 
            return <li key={i}>{ingredient}</li> // returning each individual li    
        }) 


         // let title = null; 
        // let ingredients = null; 
        

        return (
            <div className='recipeFormPage'>
                <div>
                    <div>
                    <h1 className='title'>Make a Meal</h1>
                    </div>
                    <div className='homePage'>
                        {this.props.location.pathname !== '/' ? <Nav/> : ' '}
                    </div>
                 </div>
                <div>
                    <div>
                        <h1 className="mealTitle">Create a New Meal!</h1>
                        <div>
                            <div className='newMealBox'>
                                <div>
                                    <label htmlFor="" className='newMealTitle'> 
                                    Meal title:
                                        <input 
                                            className='sizeMealInput'
                                            type='text' 
                                            name='title' 
                                            size='50'
                                            value={this.state.title} 
                                            onChange={this.handleInputChange}
                                        />
                                        <button className='makeMealButton' onClick={this.createMeal}>Make this Meal!</button>
                                    </label>
                                    <br/>
                                    <br/>
                                    <label htmlFor="" className='recipe_pic'>
                                        Image URL: 
                                        <input 
                                            type='text' 
                                            name='recipe_pic' 
                                            size='100'
                                            value={this.state.recipe_pic} 
                                            onChange={this.handleInputChange}
                                        />
                                    </label>
                                </div>
                                <div className='nutritionBox'>
                                    <div className='addIngredientsBox'>
                                        <div>
                                            <label htmlFor="" className='addIngredients'>
                                                    Add Ingredients: 
                                                    <input 
                                                        type='text' 
                                                        name='ingredient' 
                                                        size='40'
                                                        value={this.state.ingredient} 
                                                        onChange={this.handleInputChange}
                                                    />
                                                </label>
                                                <button onClick={this.handleIngredientsClick}>Add:</button>
                                                {/* <button> Get Nutrients</button> */}
                                                <ul>{list}</ul>
                                        </div>
                                    </div>
                                    </div>
                                <div className='instructionsImageBox'>
                                    <label className='instructionsTitle'htmlFor="
                                    ">Instructions:
                                    <div>
                                             <textarea name='instructions' value={this.state.instructions} onChange={this.handleInputChange}rows="12"
                                             className="instructionsBox"
                                             />
                                            <img className='formImage' src={this.state.recipe_pic} alt=""/>
                                        </div>
                                    </label>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(state => state, actions)(RecipeForm);
