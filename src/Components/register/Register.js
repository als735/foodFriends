
import React, { Component } from 'react'
// import axios from 'axios'; 
// import { connect } from 'react-redux';
import './Register.css'; 

class Register extends Component {
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
            <div className='registerPage'>
                <div>
                    <h2>Users Info:</h2>
                    <div className='usersInfo'>
                        <div>
                            <label htmlFor="">
                                First Name: 
                                <input type="text"/>
                            </label>
                        </div>
                        <div>
                            <label htmlFor="">
                                Last Name: 
                                <input type="text"/>
                            </label>
                        </div>
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
                    </div>
                    <br/>
                    <h2>Users Macros:</h2>
                    <div className='usersMacros'>
                        <div>
                            <label htmlFor="">
                                Calories:  
                                <input type="text"/>
                            </label>
                        </div>
                        <div>
                            <label htmlFor="">
                                Net Carbs: 
                                <input type="text"/>
                            </label>
                        </div>
                        <div>
                            <label htmlFor="">
                                Fat: 
                                <input type="text"/>
                            </label>
                        </div>
                        <div>
                            <label htmlFor="">
                                Protein: 
                                <input type="text"/>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Register;
