
import React, { Component } from 'react'
// import axios from 'axios'; 
import { connect } from 'react-redux';
import Nav from '../nav/Nav' ; 
import './MealCard.css'; 
import * as actions from '../../Ducks/action_creator';


class MealCard extends Component {
    state = {
        calories: '',
        recipe_calories: '',
        net_carbs : '',
        recipe_net_carbs: '',
        protein: '',
        recipe_protein: '',
        fat: '',
        recipe_fat: ''
    }
    // constructor(props){
    //     super(props); 

    // }

    // handleInputChange= (e) => {
    //     const target = e.target; 
    //     const value = target.value; 
    //     const name = target.name; 
      
    //     this.setState({
    //       [name] :value
    //     }); 
    //   }

    render() {

        let remainderCals = this.state.calories - this.state.recipe_calories; 
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
                <div>
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

            </div>
        )
    }
}

export default connect(state => state, actions)(MealCard);
