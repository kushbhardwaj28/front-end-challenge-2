import {SELECT_AVAILABLE} from '../actions/actionNames'

export default function (state = 0, action) {
    
    switch(action.type){
        case SELECT_AVAILABLE:
            return action.payload;
    }
    return state;
}