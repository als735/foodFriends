import React, { Component } from 'react'
import axios from 'axios'; 
import { connect } from 'react-redux';
import * as actions from '../../Ducks/action_creator';
import './Grocery.css'; 

class Grocery extends Component {
    state = {
        grocery_item: ''
    }; 

    groceryPost = () => {
        debugger; 
        const groceryObj = {
            grocery_item: this.state.grocery_item
        }; 
        axios.post('/api/groceries/add', groceryObj).then(({data}) => {
            debugger; 
            if (data.success) {
                this.props.setGroceries(data.groceries); 
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
            <div className='groceryPage'>
                <div className='groceryBox'>
                    
                    <div className='groceryList'>
                        <b>Grocery Shopping List:</b> 
                    </div>
                    <div>
                        <input 
                        type="text"
                        name='grocery_item'
                        value={this.state.grocery_item}
                        onChange={this.handleInputChange}
                        />
                    </div>
                    <div>
                        {this.props.grocery_item}
                    </div>

                    <button onClick={this.groceryPost}>Add</button>
                    <button>Remove</button>
                </div>
            </div>
        )
    }
}

export default connect(state => state, actions)(Grocery);
