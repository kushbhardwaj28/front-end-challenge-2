import {SELECT_PRICE} from '../actions/actionNames'

export default function (state = '0', action) {
    
    switch(action.type){
        case SELECT_PRICE:
            return action.payload;
    }
    return state;
}