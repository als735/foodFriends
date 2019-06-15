
import React, { Component } from 'react'
// import axios from 'axios'; 
// import { connect } from 'react-redux';
import Nav from '../nav/Nav' ; 
import './MealCard.css'; 

class MealCard extends Component {
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
            <div className='mealCardPage'>
                 {this.props.location.pathname !== '/' ? <Nav/> : ' '}


                Mealie Cardie  

            </div>
        )
    }
}

export default MealCard;
