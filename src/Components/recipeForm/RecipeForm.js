
import React, { Component } from 'react'
// import axios from 'axios'; 
import { connect } from 'react-redux';
import Nav from '../nav/Nav' ; 
import './RecipeForm.css'; 
import * as actions from '../../Ducks/action_creator';


class RecipeForm extends Component {
    
    state = {
        title: '',
        imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy67qKEMJNh_JsKfsEY3BTVbfSzvXi9F0QzwgKxC9fxTzYBEIb', 
        recipePic : '', 
        ingredientList : [],
        ingredient: '',
        nutrition : [], 
        instructions: '', 
        recipes: []
    }

    handleInputChange= (e) => {
        const target = e.target; 
        const value = target.value; 
        const name = target.name; 
      
        this.setState({
          [name] :value
        }); 
      }

    render() {

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
                                        Meal Title: 
                                        <input 
                                            type='text' 
                                            name='title' 
                                            size='70'
                                            value={this.state.title} 
                                            onChange={this.handleInputChange}
                                        />
                                        <button>Add:</button>
                                        <button>Make this Meal!</button>
                                    </label>
                                    <br/>
                                    <br/>
                                    <label htmlFor="" className='imageURL'>
                                        Image URL: 
                                        <input 
                                            type='text' 
                                            name='imageURL' 
                                            size='105'
                                            value={this.state.imageURL} 
                                            onChange={this.handleInputChange}
                                        />
                                    </label>
                                    <button>Add:</button>
                                </div>
                                <div className='nutritionBox'>
                                    <div className='addIngredientsBox'>
                                        <div>
                                            <label htmlFor="" className='addIngredients'>
                                                    Add Ingredients: 
                                                    <input 
                                                        type='text' 
                                                        name='imageURL' 
                                                        size='40'
                                                        value={this.state.ingredient} 
                                                        onChange={this.handleInputChange}
                                                    />
                                                </label>
                                        </div>
                                    </div>
                                    <div className='usersMealMacros'>
                                        <h2> Meal's Macros:</h2>
                                        <h3 className=''>Calories: </h3>
                                        <h3 className =''>Net Carbs: </h3>
                                        <h3 className ='' id=''>Protein: </h3>
                                        <h3 className =''>Fat: </h3>
                                    </div>
                                    <div className='usersMealMacros'>
                                        <h2> Daily Remainder:</h2>
                                        <h3 className=''>Calories: {this.props.macros.calories}</h3>
                                        <h3 className =''>Net Carbs: {this.props.macros.net_carbs}</h3>
                                        <h3 className ='' id=''>Protein: {this.props.macros.protein}</h3>
                                        <h3 className =''>Fat: {this.props.macros.fat}</h3>
                                    </div>
                                </div>
                                <div className='instructionsImageBox'>
                                    <label className='instructionsTitle'htmlFor="
                                    ">Instructions:
                                    <div>
                                             <textarea name='instructions' value={this.state.instructions} onChange={this.handleInputChange}rows="12"
                                             className="instructionsBox"
                                             />
                                            <img className='formImage' src={this.state.imageURL} alt=""/>
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
