
import React, { Component } from 'react'
import axios from 'axios'; 
import { connect } from 'react-redux';
import * as actions from '../../Ducks/action_creator';
import Nav from '../nav/Nav' ; 
import './LunchBox.css'; 
// import RecipeCards from './RecipeCards'; 

class LunchBox extends Component {
    state = {
        recipes: [],
        recipe_pic: '',
        listOfRecipes: [],
        listOfIngredients: [],
        listOfNutrition: []
    }

    componentDidMount(){
        this.getRecipes(); 
    }


    getRecipes = () => {
        //    debugger; 
           axios.get('/api/recipe/retrieve').then((res) => {
               if(res.data){
                   this.setState({
                        listOfRecipes: res.data.recipes,
                        listOfIngredients: res.data.ingredients,
                        listOfNutrition: res.data.nutrition
                   })
                }
                else {
                    alert('No Recipes')
                }
                // console.log(this.state.listOfRecipes, this.state.listOfIngredients, this.state.listOfNutrition, 'recipe get data')
            })
        }

    render() {

        // const recipes = this.state.recipes.map((e, r) => {
        //     return <RecipeCards key={e.recipes_id} id={e.recipes_id} title={e.title} recipe_pic={e.recipe_pic}/>
        // }) 

        return (
            <div className='lunchBoxPage'>
                <div>
                <div>
                    <h1 className='title'>Lunch Box</h1>
                </div>
                <div className='homePage'>
                    {this.props.location.pathname !== '/' ? <Nav/> : ' '}
                </div>
            </div>
            <div>
                <div>
                    <h2 className="introH">What is Food <i>with</i> Friends?</h2>
                    <p className="introP"> Food <i>with</i> Friends is an application that encourages you to become friends with food. So often in our lives we are unhappy due to the food we are eating, and our relationship to....</p>
                    <div>
                        {/* {recipes} */}
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default connect(state => state, actions)(LunchBox);
