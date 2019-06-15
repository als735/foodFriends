 
import React, { Component } from 'react'
// import axios from 'axios'; 
// import { connect } from 'react-redux';
import Nav from '../nav/Nav' ; 
import './Grocery.css'; 

class Grocery extends Component {
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
            <div className='authPage'>
                 {this.props.location.pathname !== '/' ? <Nav/> : ' '}

                Groceries  

            </div>
        )
    }
}

export default Grocery;
