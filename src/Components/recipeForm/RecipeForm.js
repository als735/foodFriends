
import React, { Component } from 'react'
// import axios from 'axios'; 
import { connect } from 'react-redux';
import Nav from '../nav/Nav' ; 
import './RecipeForm.css'; 
import * as actions from '../../Ducks/action_creator';
import axios from 'axios';


class RecipeForm extends Component {
    
    state = {
        title: 'Meal title:',
        imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy67qKEMJNh_JsKfsEY3BTVbfSzvXi9F0QzwgKxC9fxTzYBEIb', 
        ingredientArr : [],
        ingredient: '',
        instructions: '', 
        recipes: [],
        selectedRecipe: {},
        recipe_yield: 1 , 
        recipe_calories : '', 
        recipe_fat: '', 
        recipe_net_carbs: '',
        recipe_carb: '',
        recipe_fiber: '', 
        recipe_protein: '',
        calories : '',
        net_carbs : '',
        protein : '', 
        fat : ''
    }

    handleInputChange= (e) => {
        const target = e.target; 
        const value = target.value; 
        const name = target.name; 
      
        this.setState({
          [name] :value
        }); 
        console.log(this.state, 'current state'); 
      }

      handleIngredientsClick = (e) => {
          e.preventDefault()
          this.setState({
              ingredientArr: [...this.state.ingredientArr, this.state.ingredient]
          }) 
        //   .then((res) => {
        //     this.getApiData(e); 
        //   })
          console.log(this.state, 'state2'); 
      }

      getApiData=(recipe) => {
          debugger; 
          const {title, ingredientArr} = recipe;
          let config = {
              headers: {
                'Content-Type': 'application/json' 
              }
          }

          let recipeAnalysis = {
              title: title,
              ingr : ingredientArr
          }; 

          axios.post(`https://api.edamam.com/api/nutrition-details?app_id=1476c8c7&app_key=a77d6976afe7c2ed195b70536e293653`,recipeAnalysis ,config).then(res => {
            console.log('test', res.data)
            debugger; 
              this.setState({
                  recipe_calories : res.data.calories,
                  recipe_yield: res.data.yield,
                  recipe_fat: res.data.totalNutrients.FAT.quantity,
                  recipe_carb: res.data.totalNutrients.CHOCDF.quantity,
                  recipe_fiber: res.data.totalNutrients.FIBTG.quantity,
                  selectedRecipe: recipe, 
              }) 
          })
      }



    

    render() {
        console.log('props', this.props)

        let list = this.state.ingredientArr.map((ingredient,i)=> { // 
            return <li key={i}>{ingredient}</li> // returning each individual li    
        })

         // let title = null; 
        // let ingredients = null; 
        let remainderCals = this.state.calories - this.state.recipe_calories; 
        let remainderCarbs = this.state.net_carbs - this.state.recipe_net_carbs; 
        let remainderProtein = this.state.protein - this.state.recipe_protein; 
        let remainderFat = this.state.fat - remainderCarbs; 

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
                                        <input 
                                            className='sizeMealInput'
                                            type='text' 
                                            name='title' 
                                            size='50'
                                            value={this.state.title} 
                                            onChange={this.handleInputChange}
                                        />
                                        <button>Make this Meal!</button>
                                    </label>
                                    <br/>
                                    <br/>
                                    <label htmlFor="" className='imageURL'>
                                        Image URL: 
                                        <input 
                                            type='text' 
                                            name='imageURL' 
                                            size='180'
                                            value={this.state.imageURL} 
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
                                                <ul>{list}</ul>
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
