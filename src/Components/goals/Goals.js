
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

//     goalGrab = () => {
//         debugger; 
//         axios.get('/api/auth/register').then(res => {
//             debugger; 
//             if(res.data){
//                 console.log(res.data.user, 'data');
//                 this.props.setMacros(res.data.user);
//             }else{
//                 this.props.history.push('/')
//             }
//         })
//         .catch(err => console.log(err))
//    }


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
                    <h2 className="macroLabelsCals">Calories
                    </h2>
                    <h2 className="macroLabelsCarbs">Net Carbs</h2>
                    <h2 className="macroLabelsProtein">Protein</h2>
                    <h2 className="macroLabelsFat">Fat</h2>
                </div>
                <div className='usersMacrosCurrentStats'>
                    <h3 className='caloriesCurrentStats'>{this.props.user.first_name}</h3>
                    <h3 className ='netCarbsCurrentStats'>{this.props.user.first_name}</h3>
                    <h3 className ='proteinCurrentStats' id='proteinCurrent'>{this.props.user.first_name}</h3>
                    <h3 className ='fatCurrentStats'>{this.props.user.first_name}</h3>
                </div>
                <div className='editMacros'>
                    <div>
                        <label htmlFor="" className='calsEditMacros'> Calories
                        <input type="text" onChange={this.state.handleInputChange}/>
                        </label>
                        <button className='editButtons'>Edit</button>
                    </div>
                    <div>
                        <label htmlFor="" className='netCarbsEditMacros'> Net Carbs
                        <input type="text" onChange={this.state.handleInputChange}/>
                        </label>
                        <button className='editButtons'>Edit</button>
                    </div>
                    <div>
                        <label htmlFor="" className='proteinEditMacros'> Protein
                        <input type="text" onChange={this.state.handleInputChange}/>
                        </label>
                        <button className='editButtons'>Edit</button>
                    </div>
                    <div>
                        <label htmlFor="" className='fatEditMacros'> Fat
                        <input type="text" onChange={this.state.handleInputChange}/>
                        </label>
                        <button className='editButtons'>Edit</button>
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
                    <h3 className='weightCurrent'>{this.props.user.first_name}</h3>
                    <h3 className ='goalWeight'>{this.props.user.first_name}</h3>
                </div>
                <div className='editWeight'>
                    <div>
                        <label htmlFor="" className='currentWeightEdit'> Current Weight
                        <input type="text" onChange={this.state.handleInputChange}/>
                        </label>
                        <button className='editButtons'>Edit</button>
                    </div>
                    <div>
                        <label htmlFor="" className='goalWeightEdit'> Goal Weight
                        <input type="text" onChange={this.state.handleInputChange}/>
                        </label>
                        <button className='editButtons'>Edit</button>
                    </div>
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
