import React, {Component} from 'react'; 
import { connect } from 'react-redux';
import * as actions from '../../Ducks/action_creator';
// import {Link} from 'react-router-dom';

class IngredientsList extends Component {
    constructor(props){
        super(props); 

        this.state = {
            ingredient: ''
        }
    }

    render() {
        return(
            <div>
                {this.props.ingredient}
            </div>
        )
    }
}

    export default connect(state => state, actions)(IngredientsList);
