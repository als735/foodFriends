import React, {Component} from 'react'; 
import { connect } from 'react-redux';
import * as actions from '../../Ducks/action_creator';
import './RecipePosts.css'; 
import {Link} from 'react-router-dom';

class RecipePosts extends Component {
    constructor(props){
        super(props); 

        this.state = {
            title: '',
            recipe_pic: '',  
            profile_picture: ''
        }
    } 

render(){
    // debugger; 
    return (
        <div>
            <Link to={`/mealCard/${this.props.recipes_id}`}>
            <div className='lunchBoxBox'>
                <div className='lunchBoxTile'>
                    <h2>{this.props.title}</h2>
                    <img className='lunchBoxImage' src={this.props.recipe_pic} alt=""/>
                </div>

            </div>
            </Link> 
        </div>
        )
    }
}

export default connect(state => state, actions)(RecipePosts);
