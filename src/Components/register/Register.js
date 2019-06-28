
import React, { Component } from 'react'
import axios from 'axios';
import { connect } from 'react-redux';
import * as actions from '../../Ducks/action_creator';
import './Register.css'; 
 
class Register extends Component {

     state = {
            first_name : '',
            last_name : '',
            email : '',
            password : '',
            calories : '',
            net_carbs : '',
            fat : '',
            protein : '', 
            current_weight: '',
            goal_weight: ''    }

    register = () => {
        const registerObj = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email,
            password: this.state.password,
            calories: this.state.calories,
            net_carbs: this.state.net_carbs,
            fat: this.state.fat,
            protein: this.state.protein,
            current_weight: this.state.current_weight,
            goal_weight: this.state.goal_weight  }; 
            
        axios.post('/api/auth/register', registerObj).then(({ data }) => { 
            // debugger; 
            if (data) {
                this.props.setUser(data.user); 
                this.props.setWeight(data.weight); 
                this.props.setMacros(data.macros); 
                this.props.history.push('/home');
            } else {
                alert('Invalid Registration')
            }
            console.log(data.user, data.macros, data.weight, 'user data')
        }); 
    }; 
 
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
            <div className='registerPage'>
                {/* <div className='colorBlock'></div> */}
                <div className='colorBlock2'></div>
                    <div className='headerOutline'>
                        <h1 id="headerReg"><i>F</i>riends <i>with</i> <i>F</i>ood</h1>
                    </div>
                    <div className='colorBlock3'></div>

                <div className='registerMain'>
                    <div>
                        <h2 id="regTitle"><i>Register here . . .</i></h2>
                        <div className='welcomeTo'>
                        <h2 className="introHReg">What is <i>F</i>riends <i>with</i> <i>F</i>ood?</h2>
                    <p className="introPReg"> <b><i>F</i>riends</b> <i>with</i> <i>F</i>ood is a revolutionary application that encourages, inspires, and helps you to develop a healthy relationship with the food in your life.  So often in our lives we are unhappy due to the food we are eating, and how it makes us feel, and sometimes even grow in uncomfortable ways. 
                    <br/>
                    <br/>
                    <b>Everyone</b> has a relationship with food. Food is our life source, without it we would die. But how often do we ask ourselves how we are maintaining that relationship? How often do we contemplate how we can simplify or improve it? 
                    I have found in my own life that when I maintain my relationship with food, my life seems to go better. I have more energy, positivity, and good health. My journey has not been easy, but what journey is? I have found a route that works for me, and that is what I am sharing with you. 
                    <br/>
                    <br/>
                    <b><i>F</i>riends</b> <i>with</i> <i>F</i>ood promotes a healthy, relationship to food through its plain use of the main nutrtional macro compoents <i>Calories, Carbs, Fat, and Protein</i>. By focusing on these main macros you can begin to develop a simple relationship with the food you are eating. So that you too can become <i>F</i>riends <i>with</i> <i>F</i>ood.
                    </p>
                        </div>
                    </div>
                    <div className='outline1'>
                        <h2 className='userInfoTitle'>User's Info:</h2>
                        <div className='registrationInfo'>
                            <div className='usersInfo'>
                                <div>
                                    <label htmlFor="">
                                        First Name: 
                                        <input 
                                            type="text"
                                            name="first_name"
                                            value={this.state.first_name}
                                            onChange={this.handleInputChange}
                                        />
                                    </label>
                                </div>
                                <div>
                                    <label htmlFor="">
                                        Last Name: 
                                        <input 
                                            type="text"
                                            name="last_name"
                                            value={this.state.last_name}
                                            onChange={this.handleInputChange}
                                        />                      
                                    </label>
                                </div>
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
                                            value={this.state.value}
                                            onChange={this.handleInputChange}
                                        />
                                    </label>
                                </div>
                            </div>
                            <br/>
                            <div>
                            <h2>User's Macro Goals:</h2>
                            <div className='usersMacros'>
                                <div>
                                    <label htmlFor="">
                                        Calories:  
                                        <input 
                                            type="text"
                                            name="calories"
                                            value={this.state.calories}
                                            onChange={this.handleInputChange}
                                        />
                                    </label>
                            </div>
                                <div>
                                    <label htmlFor="">
                                          Carbs: 
                                        <input 
                                            type="text"
                                            name="net_carbs"
                                            value={this.state.net_carbs}
                                            onChange={this.handleInputChange}
                                        />
                                    </label>
                                </div>
                                <div>
                                    <label htmlFor="">
                                        Fat: 
                                        <input 
                                            type="text"
                                            name="fat"
                                            value={this.state.fat}
                                            onChange={this.handleInputChange}
                                        />
                                    </label>
                            </div>
                                <div>
                                    <label htmlFor="">
                                        Protein: 
                                        <input 
                                            type="text"
                                            name="protein"
                                            value={this.state.protein}
                                            onChange={this.handleInputChange}
                                        /> 
                                    </label>
                                </div>
                            </div>
                            </div>
                            <div>
                            <h2>User's Weight Goals:</h2>
                            <div className='usersMacros'>
                                <div>
                                    <label htmlFor="">
                                        Current Weight:  
                                        <input 
                                            type="text"
                                            name="current_weight"
                                            value={this.state.current_weight}
                                            onChange={this.handleInputChange}
                                        />
                                    </label>
                                </div>
                                <div>
                                    <label htmlFor="">
                                        Goal Weight:  
                                        <input 
                                            type="text"
                                            name="goal_weight"
                                            value={this.state.goal_weight}
                                            onChange={this.handleInputChange}
                                        /> 
                                    </label>
                                </div>
                            </div>
                            </div>
                            <label htmlFor="">
                                <button className='regButton' onClick={this.register}>Register User</button>
                            </label>
                        </div>
                        <div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(state => state, actions)(Register);
// export default Register;
