import React, { Component } from 'react'
import axios from 'axios'; 
import { connect } from 'react-redux';
import * as actions from '../../Ducks/action_creator';
import './Life.css'; 

class Life extends Component {
    state = {
        life_goal: '',
        lifeArr: []
    }; 

deleteLife = () => {
      debugger;
    axios.delete(`/api/life/delete?life_id=${this.props.life_id}`).then(({data}) => {
        debugger;
        if (data) {
            this.props.setLife(data.lifeGoals);
        } else {
            alert('Could not delete')
        }
    })
}

 
    render() {

        return (
            <div className='lifePage'>
                {this.props.life_goal}
                <button onClick={ () => {this.deleteLife()}}>Completed</button>
            </div>
        )
    }
}

export default connect(state => state, actions)(Life);
