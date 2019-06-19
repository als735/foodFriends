
import React, { Component } from 'react'
// import axios from 'axios'; 
import { connect } from 'react-redux';
import Nav from '../nav/Nav' ; 
import './Goals.css'; 
import * as actions from '../../Ducks/action_creator';


class Goals extends Component {
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
            <div className='goalsPage'>
                <div>
            <div>
                <div>
                    <h2 className='titlePage'>Goals</h2> 
                </div>
                <div className='homePage'>
                    {this.props.location.pathname !== '/' ? <Nav/> : ' '}
                </div>
            </div>
            <div>
                <div className='macroLabels'>
                    <h2 className="macroLabelsCals">Calories</h2>
                    <h2 className="macroLabelsCarbs">Net Carbs</h2>
                    <h2 className="macroLabelsProtein">Protein</h2>
                    <h2 className="macroLabelsFat">Fat</h2>
                </div>
                <div className='usersMacrosCurrentStats'>
                    <h3 className='firstMacro'>1200</h3>
                    <h3 className ='allOtherMacros'>30</h3>
                    <h3 className ='allOtherMacros'>80</h3>
                    <h3 className ='allOtherMacros'>90</h3>
                </div>
            </div>
        </div>
        </div>
        )
    }
}


export default connect(state => state, actions)(Goals);

// export default Goals;
