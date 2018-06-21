import {SELECT_CATEGORY} from '../actions/actionNames'

export default function (state = "All", action) {
    
    switch(action.type){
        case SELECT_CATEGORY:
            return action.payload;
    }
    return state;
}