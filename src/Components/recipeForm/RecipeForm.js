
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
                 
            <h1 className='title'>Make a Meal</h1>

            {this.props.location.pathname !== '/' ? <Nav/> : ' '}
            </div>
        )
    }
}

export default RecipeForm;
