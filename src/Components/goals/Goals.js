 
import React, { Component } from 'react'
import axios from 'axios'; 
import { connect } from 'react-redux';
import Nav from '../nav/Nav' ; 
import './Goals.css'; 
import * as actions from '../../Ducks/action_creator';


class Goals extends Component {
    state = {
        calories : '',
        net_carbs : '',
        protein : '', 
        fat : '',
        current_weight : '',
        goal_weight: '',
        life_goal: '',
    }; 

updateMacros = (columnName) => {
    const goalObj = {
        macros_id: this.props.macros.macros_id,
        columnName, 
        value: this.state[columnName]
    }
    axios.put('/api/goals/macros', goalObj).then(({data}) => {
        // debugger; 
        if(data) {
            this.props.setMacros(data[0]); 
        } else {
            alert('Invalid Update')
        }
        console.log(data.macros, 'data')
    })

}

updateWeight = (columnName) => {
    const goalObj = {
        weight_id: this.props.weight.weight_id,
        columnName, 
        value: this.state[columnName]
    }
    axios.put('/api/goals/weight', goalObj).then(({data}) => {
        // debugger; 
        if(data) {
            this.props.setWeight(data[0]); 
        } else {
            alert('Invalid Update')
        }
        console.log(data.weight, 'data')
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
                    <h2 className="macroLabelsCals">Calories
                    </h2>
                    <h2 className="macroLabelsCarbs">Carbs</h2>
                    <h2 className="macroLabelsProtein">Protein</h2>
                    <h2 className="macroLabelsFat">Fat</h2>
                </div>
                <div className='usersMacrosCurrentStats'>
                    <h3 className='caloriesCurrentStats'>{this.props.macros.calories}</h3>
                    <h3 className ='netCarbsCurrentStats'>{this.props.macros.net_carbs}</h3>
                    <h3 className ='proteinCurrentStats' id='proteinCurrent'>{this.props.macros.protein}</h3>
                    <h3 className ='fatCurrentStats'>{this.props.macros.fat}</h3>
                </div>
                <div className='editMacros'>
                    <div>
                        <label htmlFor="" className='calsEditMacros'> Calories
                        <input 
                            type="text" 
                            name='calories'
                            value={this.state.calories}
                            onChange={this.handleInputChange}
                            />
                        </label>
                        <button className='editButtons' onClick={() => {this.updateMacros('calories')}}>Edit</button>
                    </div>
                    <div>
                        <label htmlFor="" className='netCarbsEditMacros'> Carbs
                        <input 
                            type="text" 
                            name="net_carbs"
                            value={this.state.net_carbs}
                            onChange={this.handleInputChange}/>
                        </label>
                        <button className='editButtons' onClick={() => {this.updateMacros('net_carbs')}}>Edit</button>
                    </div>
                    <div>
                        <label htmlFor="" className='proteinEditMacros'> Protein
                        <input 
                            type="text" 
                            name="protein"
                            value={this.state.protein}
                            onChange={this.handleInputChange}/>
                        </label>
                        <button className='editButtons'onClick={() => {this.updateMacros('protein')}} >Edit</button>
                    </div>
                    <div>
                        <label htmlFor="" className='fatEditMacros'> Fat
                        <input 
                            type="text" 
                            name="fat"
                            value={this.state.fat}
                            onChange={this.handleInputChange}/>
                        </label>
                        <button className='editButtons' onClick={() => {this.updateMacros('fat')}}>Edit</button>
                    </div>
                </div>
                <div>
                <h1 className='weightTitle'>Weight</h1>
                </div>
                <div className='weightLabels'>
                    <h2 className="currentWeightLabels">Current Weight</h2>
                    <h2 className="goalWeightLabels">Goal Weight</h2>
                </div>
                <div className='usersWeightCurrentStats'>
                    <h3 className='weightCurrent'>{this.props.weight.current_weight}</h3>
                    <h3 className ='goalWeight'>{this.props.weight.goal_weight}</h3>
                </div>
                <div className='editWeight'>
                    <div>
                        <label htmlFor="" className='currentWeightEdit'> Current Weight
                        <input 
                            type="text" 
                            name="current_weight"
                            value={this.state.current_weight}
                            onChange={this.handleInputChange}/>
                        </label>
                        <button className='editButtons' onClick={() => {this.updateWeight('current_weight')}}>Edit</button>
                    </div>
                    <div>
                        <label htmlFor="" className='goalWeightEdit'> Goal Weight
                        <input 
                            type="text" 
                            name="goal_weight"
                            value={this.state.goal_weight}
                            onChange={this.handleInputChange}/>
                        </label>
                        <button className='editButtons' onClick={() => {this.updateWeight('goal_weight')}}>Edit</button>
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
