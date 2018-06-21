import {ADD_TO_WL, REMOVE_FROM_WL} from '../actions/actionNames'

export default function (state = [], action) {
    
    switch(action.type){
        case ADD_TO_WL:
            return state.concat(action.payload);
        case REMOVE_FROM_WL:
            let wl = [];
            state.splice(state.indexOf(action.payload),1);
            wl = wl.concat(state);
            return wl;
    }
    return state;
}