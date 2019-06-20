
import React, { Component } from 'react'
// import axios from 'axios'; 
import { connect } from 'react-redux';
import Nav from '../nav/Nav' ; 
import './Goals.css'; 
import * as actions from '../../Ducks/action_creator';


class Goals extends Component {
    state = {
        caloriess : '',
        net_carbs : '',
        protein : '', 
        fat : '',
        current_weight : '',
        goal_weight: '',
        life_goal: ''
    }; 

    handleInputChange= (e) => {
        const target = e.target; 
        const value = target.value; 
        const name = target.name; 
      
        this.setState({
          [name] :value
        }); 
      }

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
                <h1 className='macrosTitle'>Macros</h1>
            </div>
            <div>
                <div className='macroLabels'>
                    <h2 className="macroLabelsCals">Calories</h2>
                    <h2 className="macroLabelsCarbs">Net Carbs</h2>
                    <h2 className="macroLabelsProtein">Protein</h2>
                    <h2 className="macroLabelsFat">Fat</h2>
                </div>
                <div className='usersMacrosCurrentStats'>
                    <h3 className='caloriesCurrentStats'>2000</h3>
                    <h3 className ='netCarbsCurrentStats'>30</h3>
                    <h3 className ='proteinCurrentStats' id='proteinCurrent'>80</h3>
                    <h3 className ='fatCurrentStats'>90</h3>
                </div>
                <div className='editMacros'>
                    <label htmlFor="" className='calsEditMacros'> Calories
                    <input type="text" onChange={this.state.handleInputChange}/>
                    </label>
                    <label htmlFor="" className='netCarbsEditMacros'> Net Carbs
                    <input type="text" onChange={this.state.handleInputChange}/>
                    </label>
                    <label htmlFor="" className='proteinEditMacros'> Protein
                    <input type="text" onChange={this.state.handleInputChange}/>
                    </label>
                    <label htmlFor="" className='fatEditMacros'> Fat
                    <input type="text" onChange={this.state.handleInputChange}/>
                    </label>
                    <button className='editCalsMacrosButton'>Edit</button>
                    <button className='editCarbsMacrosButton'>Edit</button>
                    <button className='editProteinMacrosButton'>Edit</button>
                    <button className='editFatMacrosButton'>Edit</button>
                </div>
                <div>
                <h1 className='weightTitle'>Weight</h1>
                </div>
                <div className='weightLabels'>
                    <h2 className="currentWeightLabels">Current Weight</h2>
                    <h2 className="goalWeightLabels">Goal Weight</h2>
                </div>
                <div className='usersMacrosCurrentStats'>
                    <h3 className='caloriesCurrentStats'>2000</h3>
                    <h3 className ='netCarbsCurrentStats'>30</h3>
                    <h3 className ='proteinCurrentStats' id='proteinCurrent'>80</h3>
                    <h3 className ='fatCurrentStats'>90</h3>
                </div>
                <div className='editMacros'>
                    <label htmlFor="" className='calsEditMacros'> Calories
                    <input type="text" onChange={this.state.handleInputChange}/>
                    </label>
                    <label htmlFor="" className='netCarbsEditMacros'> Net Carbs
                    <input type="text" onChange={this.state.handleInputChange}/>
                    </label>
                    <label htmlFor="" className='proteinEditMacros'> Protein
                    <input type="text" onChange={this.state.handleInputChange}/>
                    </label>
                    <label htmlFor="" className='fatEditMacros'> Fat
                    <input type="text" onChange={this.state.handleInputChange}/>
                    </label>
                    <button className='editCalsMacrosButton'>Edit</button>
                    <button className='editCarbsMacrosButton'>Edit</button>
                    <button className='editProteinMacrosButton'>Edit</button>
                    <button className='editFatMacrosButton'>Edit</button>
                </div>
                <div className='lifeGoalsBox'>
                    <textarea name="lifeGoals" id="" onChange={this.state.handleInputChange} className='lifeGoalsBox'></textarea>
                        <div className='goalButtonBox'>
                            <button className='addGoalsButton'>Add</button>
                            <button className='deleteGoalsButton'>Delete</button>
                        </div>
                </div>
            </div>
        </div>
        </div>
        )
    }
}


export default connect(state => state, actions)(Goals);

// export default Goals;
