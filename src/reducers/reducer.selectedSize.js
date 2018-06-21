import {SELECT_SIZE} from '../actions/actionNames'

export default function (state = 'All', action) {
    
    switch(action.type){
        case SELECT_SIZE:
            return action.payload;
    }
    return state;
}