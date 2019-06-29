import React, { Component } from 'react'
import axios from 'axios'; 
import { connect } from 'react-redux';
import * as actions from '../../Ducks/action_creator';
import './Life.css'; 

class Life extends Component {
    state = {
        life_goal: '',
        life_Arr: []
    }; 


    lifePost = () => {
        debugger; 
        const lifeObj = {
            life_goal: this.state.life_goal 
        }; 
        axios.post('/api/life/add', lifeObj).then(({data}) => {
            debugger
            if (data.success) {
                this.props.setLife(data.life); 
            } else {
                alert('Invalid Entry')
            }
        });
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

        return (
            <div className='lifePage'>
                <div>
                    <h1 className='lifeTitle'>Life Goals</h1>
                <div className='lifeGoalsBox'>
                    <textarea 
                    name="life_goal" id="" 
                    value={this.state.life_goal}
                    onChange={this.handleInputChange} className='lifeGoalsBox'/>
                        <div className='goalButtonBox'>
                            <button onClick={this.lifePost}className='addGoalsButton'>Add</button>
                            <button className='deleteGoalsButton'>Delete</button>
                        </div>
                </div>
                </div>
            </div>
        )
    }
}

export default connect(state => state, actions)(Life);
