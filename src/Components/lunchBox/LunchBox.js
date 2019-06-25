
import React, { Component } from 'react'
// import axios from 'axios'; 
import { connect } from 'react-redux';
import * as actions from '../../Ducks/action_creator';
import Nav from '../nav/Nav' ; 
import './LunchBox.css'; 

class LunchBox extends Component {
    state = {
        recipes: '',
        recipe_pic: ''
    }

//     componentDidMount(){
//         this.loadLunchBox();
//     }

//     loadLunchBox = () => {
//         // debugger; 
//         axios.get('/api/recipe/retrieve').then(res => {
//             // debugger; 
//             if(res.data){
//                 console.log(res.data.recipe, 'data2'); 
//                 this.props.setRecipe(res.data.recipe);
//             }else{
//                     alert('Lunch Box Not Loading')
//             }
//         })
//         .catch(err => console.log(err))
//    }

// getApiData=(recipe) => {
//     debugger; 
//     const {title, ingredientArr} = recipe;
//     let config = {
//         headers: {
//           'Content-Type': 'application/json' 
//         }
//     }

//     let recipeAnalysis = {
//         title: title,
//         ingr : ingredientArr
//     }; 

//     axios.post(`https://api.edamam.com/api/nutrition-details?app_id=1476c8c7&app_key=a77d6976afe7c2ed195b70536e293653`,recipeAnalysis ,config).then(res => {
//       console.log('test', res.data)
//       debugger; 
//         this.setState({
//             recipe_calories : res.data.calories,
//             recipe_yield: res.data.yield,
//             recipe_fat: res.data.totalNutrients.FAT.quantity,
//             recipe_carb: res.data.totalNutrients.CHOCDF.quantity,
//             recipe_fiber: res.data.totalNutrients.FIBTG.quantity,
//             selectedRecipe: recipe, 
//         }) 
//     })
// }

    render() {

        // const recipes = this.state.recipes.map((e, i, a) => {
        //     return <button className='mealCardMiniBox' key={i} onClick={()=>{this.props.getApiData(e)}}>Butt</button>
        // }) 

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
                    <div>
                        {/* {recipes} */}
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default connect(state => state, actions)(LunchBox);
