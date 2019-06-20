import {combineReducers} from 'redux'

const user = (state= {}, action) => {
    switch(action.type){
        case 'setUser':
            return action.payload;
        default:
            return state;
    } 
}

const macros = (state= {}, action) => {
    switch(action.type){
        case 'setMacros':
            return action.payload;
        default:
            return state;
    } 
}

export default combineReducers({user, macros});