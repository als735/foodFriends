import React, { Component } from 'react'
// import axios from 'axios'; 
// import { connect } from 'react-redux';
import Nav from '../nav/Nav' ; 
import './Home.css'; 
import Grocery from '../grocery/Grocery'; 
 
class Home extends Component {
    // constructor(props){
    //     super(props); 

    // }

    handleInputChange= (e) => {
        const target = e.target; 
        const value = target.value; 
        const name = target.name; 
      
        this.setState({
          [name] :value
        }); 
      } 

    render() {

        return (
        <div>
            <div>
                <div>
                    <h2 className='titlePage'>Home</h2> 
                </div>
                <div className='homePage'>
                    {this.props.location.pathname !== '/' ? <Nav/> : ' '}
                </div>
            </div>
            <div>
                <Grocery/>
            </div>
            <div>
                <div>
                    <h2 className="introH">What is <i>F</i>riends <i>with</i> <i>F</i>ood?</h2>
                    <p className="introP"> <b><i>F</i>riends</b> <i>with</i> <i>F</i>ood is a revolutionary application that encourages, inspires, and helps you to develop a healthy relationship with the food in your life.  So often in our lives we are unhappy due to the food we are eating, and how it makes us feel, and sometimes even grow in uncomfortable ways. 
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
        </div>
        )
    }
}

export default Home;
