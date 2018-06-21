import {SELECT_SRC} from '../actions/actionNames'

export default function (state = 'All', action) {
    
    switch(action.type){
        case SELECT_SRC:
            let payload = action.payload == 'null' ? null : action.payload;
            return payload;
    }
    return state;
}