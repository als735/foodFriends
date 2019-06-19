
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
console.log(this.props, 'props')
        // let cals = this.props.user.calories; 

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
                    <h3 className='firstMacro'>2000</h3>
                    <h3 className ='allOtherMacros'>30</h3>
                    <h3 className ='allOtherMacros'>80</h3>
                    <h3 className ='allOtherMacros'>90</h3>
                </div>
                <div className='editMacros'>
                    <label htmlFor="" className='firstEditMacro'>
                    <input type="text"/>
                    </label>
                    <label htmlFor="" className='remaininngEditMacros'>
                    <input type="text"/>
                    </label>
                    <label htmlFor="" className='remaininngEditMacros'>
                    <input type="text"/>
                    </label>
                    <label htmlFor="" className='remaininngEditMacros'>
                    <input type="text"/>
                    </label>
                    <button>Edit</button>
                </div>
                <div className='lifeGoalsBox'>
                    <label htmlFor="">
                    <input type="text"/>
                    </label>
                    <button>Add</button>
                    <button>Delete</button>
                </div>
            </div>
        </div>
        </div>
        )
    }
}


export default connect(state => state, actions)(Goals);

// export default Goals;
