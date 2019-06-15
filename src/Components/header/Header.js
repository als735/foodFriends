 
import React, { Component } from 'react'
// import axios from 'axios'; 
// import { connect } from 'react-redux';
import './Header.css'; 
import {Link} from "react-router-dom";


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

    render() {

        return (
            <div className='headerPage'>
                <h1 id="header1"> Friends <i>with</i> Food</h1>

                <div className='userBox'>
                    <div>
                        User Picture
                    </div>
                    {/* https://robohash.org/abby?set=set4 */}

                        <Link to="/" classname='links'>
                        <button>Logout</button>
                        </Link>
                </div>
 
            </div>
        )
    }
}

export default Header;
