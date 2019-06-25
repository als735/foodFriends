
import React, { Component } from 'react'
// import axios from 'axios'; 
import { connect } from 'react-redux';
import * as actions from '../../Ducks/action_creator';
import Nav from '../nav/Nav' ; 
import './LunchBox.css'; 

class LunchBox extends Component {
    

//     componentDidMount(){
//         this.authMe();
//     }

//     authMe = () => {
//         // debugger; 
//         axios.get('/api/auth/me').then(res => {
//             // debugger; 
//             if(res.data){
//                 console.log(res.data.user, res.data.macros,res.data.weight, 'data');
//                 this.props.setUser(res.data.user);
//                 this.props.setWeight(res.data.weight);
//                 this.props.setMacros(res.data.macros); 
//             }else{
//                 this.props.history.push('/')
//             }
//         })
//         .catch(err => console.log(err))
//    }

    render() {

        return (
            <div className='lunchBoxPage'>
                <div>
                <div>
                    <h1 className='title'>Lunch Box</h1>
                </div>
                <div className='homePage'>
                    {this.props.location.pathname !== '/' ? <Nav/> : ' '}
                </div>
            </div>
            <div>
                <div>
                    <h2 className="introH">What is Food <i>with</i> Friends?</h2>
                    <p className="introP"> Food <i>with</i> Friends is an application that encourages you to become friends with food. So often in our lives we are unhappy due to the food we are eating, and our relationship to....</p>
                </div>
            </div>
            </div>
        )
    }
}

export default connect(state => state, actions)(LunchBox);
