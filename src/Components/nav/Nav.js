
import React, { Component } from 'react'
// import axios from 'axios'; 
// import { connect } from 'react-redux';
// import {Link} from "react-router-dom";
import '../header/Header'; 
import './Nav.css'; 
import Header from '../header/Header';
import {Link} from "react-router-dom";


class Nav extends Component {
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
            <div className='navPage'>
                <Header/>
                <div className='navBar'>
                    <div>
                        <Link to='/home' className='links'>
                            <button>Home</button>
                        </Link>
                    </div>
                    <div>
                        <Link to='/goals' className='links'>
                            <button>Goals</button>
                        </Link>
                    </div>
                    <div>
                        <Link to='/recipeForm' className='links'>
                            <button>Make a Meal</button>
                        </Link>
                    </div>
                    <div>
                        <Link to='/lunchbox' className='links'>
                            <button>Lunch Box</button>
                        </Link>
                    </div>
                    <div>
                        <Link to='/planning' className='links'>
                            <button>Meal Plan</button>
                        </Link>
                    </div>  
               </div>
            </div>
        )
    }
}

export default Nav;
