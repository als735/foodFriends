
import React, { Component } from 'react'
import axios from 'axios'; 
import { connect } from 'react-redux';
import '../header/Header'; 
import './Nav.css'; 
import Header from '../header/Header';
import {Link} from "react-router-dom";
import * as actions from '../../Ducks/action_creator';

class Nav extends Component {
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

    componentDidMount(){
        this.authMe();
    }
   
   authMe = () => {
       debugger  
        axios.get('/api/auth/me').then(res => {
            console.log(res.data, 'data'); 
                this.props.setUser(res.data.user); 
        })
        .catch(err => console.log(err))
   }

    render() {
        const prof_pic = {
            yourFace : `url(${this.props.user.prof_pic})`
        }
        return (
            <div className='navPage'>
                <Header/>
                <div className='navBar'>
                    <div>
                        <Link to='/home' className='linksHome'>
                            <img className="navieButton" src={navieHome} alt=""/> 
                        </Link>
                    </div>
                    <div>
                        <Link to='/goals' className='links'>
                            Goals
                        </Link>
                    </div>
                    <div>
                        <Link to='/recipeForm' className='links'>
                            Make a Meal
                        </Link>
                    </div>
                    <div>
                        <Link to='/lunchbox' className='links'>
                            Lunch Box
                        </Link>
                    </div>
                    <div>
                        <Link to='/planning' className='links'>
                            Meal Plan
                        </Link>
                    </div> 

                    <div className='prof_pic' style={{backgroundImage: prof_pic.yourFace}}/>
                    <div className='listingUser' onClick={this.authMe}>{this.props.user.first_name}</div>

               </div>
            </div>
        )
    }
}

export default connect(state => state, actions)(Nav);



let navieHome = "data:image/png;base64,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"; 
