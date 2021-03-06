 
import React, { Component } from 'react'
import axios from 'axios'; 
import { connect } from 'react-redux';
import './Header.css'; 
import {Link} from "react-router-dom";
import * as actions from '../../Ducks/action_creator';


class Header extends Component {
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

    logout = () => {
        axios.post('api/auth/logout')
        .then(results => {
            if(results.success){
                this.props.setUser(results)
            }
        })
    }


 
    render() {
        
        return (
            <div className='headerPage'>
                <div>
                    <div className='navImages'>
                            <Link to="/" className='logout'>
                            <img className='logout' src={navieOut} alt="" onClick={this.logout}/>
                            </Link>
                    </div>
                <h1 id="header1"> <i>F</i>riends <i>with</i> <i>F</i>ood</h1>
                </div> 
 
            </div>
        )
    }
}

export default connect(state => state, actions)(Header);






let navieOut = "data:image/png;base64,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"; 
