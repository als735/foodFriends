import React, { Component } from 'react'
import axios from 'axios'; 
import { connect } from 'react-redux';
import * as actions from '../../Ducks/action_creator';
import './Grocery.css'; 

class Grocery extends Component {
    state = {
        grocery_item: '',
        grocery_Arr: []
    }; 

    deleteGroceries = () => {
        debugger;
      axios.delete(`/api/groceries/delete?groceries_id=${this.props.groceries_id}`).then(({data}) => {
          debugger;
          if (data) {
              this.props.setGroceries(data.groceries);
          } else {
              alert('Could not delete')
          }
      })
  }
 
    render() {

        return (
            <div className='groceryPage'>
                <div>
                    <div>
                        {this.props.grocery_item}
                        <button onClick={ () => {this.deleteGroceries()}}>X</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(state => state, actions)(Grocery);
