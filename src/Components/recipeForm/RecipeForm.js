
import React, { Component } from 'react'
// import axios from 'axios'; 
// import { connect } from 'react-redux';
import Nav from '../nav/Nav' ; 
import './RecipeForm.css'; 

class RecipeForm extends Component {
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
                    <h2 className="introH">What is Food <i>with</i> Friends?</h2>
                    <p className="introP"> Food <i>with</i> Friends is an application that encourages you to become friends with food. So often in our lives we are unhappy due to the food we are eating, and our relationship to....</p>
                </div>
            </div>
            </div>
        )
    }
}

export default RecipeForm;
