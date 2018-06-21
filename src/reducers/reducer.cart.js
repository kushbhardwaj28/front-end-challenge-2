import {ADD_TO_CART} from '../actions/actionNames'

export default function (state = [], action) {
    
    switch(action.type){
        case ADD_TO_CART:
            return state.concat(action.payload);
    }
    return state;
}