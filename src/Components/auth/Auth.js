
import React, { Component } from 'react'
// import axios from 'axios'; 
// import { connect } from 'react-redux';
import Nav from '../nav/Nav' ; 
import './Auth.css'; 
import {Link} from "react-router-dom";
 

class Auth extends Component {
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
                 <div className='authieBox'>
                    <div>
                        <div>
                            <label htmlFor="">
                                Email: 
                            <input type="text"/>
                            </label>
                        </div>
                        <div>
                            <label htmlFor="">
                                Password: 
                            <input type="text"/>
                            </label>
                        </div>
                        <button>Login</button>
                        <Link to="/register" classname='links'>
                            <button>Register Here</button>
                        </Link>
                    </div>

                 </div>
            </div>
        )
    }
}

export default Auth;
