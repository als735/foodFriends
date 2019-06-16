
import React, { Component } from 'react'
// import axios from 'axios'; 
// import { connect } from 'react-redux';
import Nav from '../nav/Nav' ; 
import './LunchBox.css'; 

class LunchBox extends Component {
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
            <div className='lunchBoxPage'>
                <h1 className='title'>Lunch Box</h1>

                 {this.props.location.pathname !== '/' ? <Nav/> : ' '} 

            </div>
        )
    }
}

export default LunchBox;
