
import React, { Component } from 'react'
// import axios from 'axios'; 
// import { connect } from 'react-redux';
// import * as actions from '../../Ducks/action_creator';
import Nav from '../nav/Nav' ; 
import './Auth.css'; 
import {Link} from "react-router-dom";
 

class Auth extends Component {

        state = {
            email: '',
            password: ''
        
    }
    
    login = () => {
        this.setState({
            email: this.state.email,
            password: this.state.password 
        })
    }

    handleInputChange= (e) => {
        const target = e.target; 
        const value = target.value; 
        const name = target.name; 
      
        this.setState({
          [name] :value
        }); 
        console.log("state change", this.state); 
      }

    render() {

        return (
            <div className='authPage'>
                 {this.props.location.pathname !== '/' ? <Nav/> : ' '}
                 <div className='authieBox'>
                    <div>
                        <div>
                            <label htmlFor="">
                                Email: 
                                <input 
                                    type="text"
                                    name="email"
                                    value={this.state.email}
                                    onChange={this.handleInputChange}
                                />
                            </label>
                        </div>
                        <div>
                            <label htmlFor="">
                                Password: 
                                <input 
                                    type="text"
                                    name="password"
                                    value={this.state.password}
                                    onChange={this.handleInputChange}
                                />
                            </label>
                        </div>
                        <button onClick={this.login}>Login</button>
                        <Link to="/register" className='links'>
                            <button>Register Here</button>
                        </Link>
                    </div>

                 </div>
            </div>
        )
    }
}

// export default connect(state => state, actions)(Auth);
export default Auth;
