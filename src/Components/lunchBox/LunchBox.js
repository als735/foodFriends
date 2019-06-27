
import React, { Component } from 'react'
import axios from 'axios'; 
import { connect } from 'react-redux';
import * as actions from '../../Ducks/action_creator';
import Nav from '../nav/Nav' ; 
import './LunchBox.css'; 
import RecipePosts from './RecipePosts'; 

class LunchBox extends Component {
    state = {
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

        const recipesLunchBox = this.state.listOfRecipes.map((e, i) => {
            return <RecipePosts key={i} index={i} recipes_id={e.recipes_id} title={e.title} recipe_pic={e.recipe_pic}/>
        })


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
                    <div className='recipesInBox'>
                        {recipesLunchBox}
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default connect(state => state, actions)(LunchBox);
