import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Route, HashRouter } from 'react-router-dom';

import App from './components/app';
import SingleProduct from './containers/singleProduct';
import Cart from './containers/cart';
import WishList from './containers/wishlist';


import reducers from './reducers';

import { loadState, saveState } from './localStorage/index';

const persistentState = loadState();

const store = createStore(
    reducers,
    persistentState,
    applyMiddleware()
);
store.subscribe(()=>{
    saveState({
        cartProducts:store.getState().cartProducts,
        wlProducts:store.getState().wlProducts
    });
});


ReactDOM.render(
<Provider store={store}>
    <HashRouter >
        <div>
        <Route exact path='/' component={App} />
        <Route exact path='/product/:id' component={SingleProduct} />
        <Route exact path='/cart' component={Cart} />
        <Route exact path='/wishlist' component={WishList} />
        </div>
    </HashRouter>
</Provider>, document.querySelector('.helo'));
