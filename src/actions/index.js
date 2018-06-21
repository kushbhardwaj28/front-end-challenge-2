import {SELECT_CATEGORY, SELECT_SIZE, SELECT_PRICE, SELECT_AVAILABLE, 
    SELECT_SRC, ADD_TO_CART, ADD_TO_WL, REMOVE_FROM_CART, REMOVE_FROM_WL} from './actionNames';

export function setCategory(category){
    return({
        type: SELECT_CATEGORY,
        payload: category
    });
}

export function setSize(size){
    return({
        type: SELECT_SIZE,
        payload: size
    });
}

export function setPrice(price){
    return({
        type: SELECT_PRICE,
        payload: price
    });
}

export function setAvailable(isAvail){
    return({
        type: SELECT_AVAILABLE,
        payload: isAvail
    });
}

export function setSrc(src){
    return({
        type: SELECT_SRC,
        payload: src
    });
}
export function addCart(id){
    return({
        type: ADD_TO_CART,
        payload: id
    });
}
export function addWL(id){
    return({
        type: ADD_TO_WL,
        payload: id
    });
}
export function removeCart(id){
    return({
        type: REMOVE_FROM_CART,
        payload: id
    });
}
export function removeWL(id){
    return({
        type: REMOVE_FROM_WL,
        payload: id
    });
}