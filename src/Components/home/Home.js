
import React, { Component } from 'react'
// import axios from 'axios'; 
// import { connect } from 'react-redux';
import Nav from '../nav/Nav' ; 
import './Home.css'; 
 
class Home extends Component {
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
            <div className='homePage'>
                 {this.props.location.pathname !== '/' ? <Nav/> : ' '}
            <h2 className='titlePage'>Home</h2>  
            </div>
        )
    }
}

export default Home;
