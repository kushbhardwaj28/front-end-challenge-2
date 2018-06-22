import {ADD_TO_CART, REMOVE_FROM_CART} from '../actions/actionNames'

export default function (state = [], action) {
    switch(action.type){
        case ADD_TO_CART:
            return state.concat(action.payload);
        case REMOVE_FROM_CART:
            let cart = [];
            state.splice(state.indexOf(action.payload),1);
            cart = cart.concat(state);
            return cart;
    }
    return state;
}