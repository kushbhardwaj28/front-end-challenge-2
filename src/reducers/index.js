import { combineReducers } from 'redux';
import Products from './reducer.products';
import Category from './reducer.category';
import SelectedCategory from './reducer.selectedCategory';
import SelectedSize from './reducer.selectedSize';
import SelectedSrc from './reducer.selectedSrc';
import SelectedPrice from './reducer.selectedPrice';
import SelectedAvail from './reducer.isAvailable';
import getSize from './reducer.getsizes';

import cart from './reducer.cart';
import wl from './reducer.wl';

const rootReducer = combineReducers({
    Products: Products,
    Categories: Category,
    Sizes: getSize,
    selectedCategory: SelectedCategory,
    selectedSize: SelectedSize,
    selectedSrc: SelectedSrc,
    selectedPrice: SelectedPrice,
    isAvailable: SelectedAvail,
    cartProducts:cart,
    wlProducts: wl,
    searchTxt: ''
});

export default rootReducer;