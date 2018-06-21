import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Switch } from 'react-router';
import { BrowserRouter, Route, HashRouter } from 'react-router-dom';

import App from './components/app';
import SingleProduct from './containers/singleProduct';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
<Provider store={createStoreWithMiddleware(reducers)}>
    <HashRouter >
        <div>
        <Route exact path='/' component={App} />
        <Route exact path='/product/:id' component={SingleProduct} />
        </div>
    </HashRouter>
</Provider>, document.querySelector('.helo'));
