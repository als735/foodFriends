import React, { Component } from 'react'
// import axios from 'axios'; 
// import { connect } from 'react-redux';
import './Grocery.css'; 

class Grocery extends Component {
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
            <div className='groceryPage'>
                <div className='groceryBox'>
                    
                    <div className='groceryList'>
                        <b>Grocery Shopping List:</b> 
                    </div>
                    <button>Add</button>
                    <button>Remove</button>
                </div>
            </div>
        )
    }
}

export default Grocery;
