
import React, { Component } from 'react'
// import axios from 'axios'; 
// import { connect } from 'react-redux';
// import {Link} from "react-router-dom";
import '../header/Header'; 
import './Nav.css'; 
import Header from '../header/Header';

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


                Navie  

            </div>
        )
    }
}

export default Nav;
