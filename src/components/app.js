import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import Filter from '../containers/filter';
import ProductList from '../containers/product-list';

export default class App extends Component {
  render() {
    return (
      <div className='container-fluid app'>
        <div className='row header p-3'>
        <SearchBar />
        </div>
        <div className='row'>
          <Filter />
          <ProductList />
        </div>
      </div>
    );
  }
}