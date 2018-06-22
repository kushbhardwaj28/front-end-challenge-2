import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import SearchBar from './search_bar';
import CartItem from '../components/cartItem';

import { removeCart } from '../actions/index';

class Cart extends Component{

    getItemById(id) {
		let obj = {};
		this.props.products.map((item) => {
			if (item.id == id) obj = item;
        })
		return obj;
    }

    getQuantity(id) {
		let quant = 0;
		for(let item in this.props.cart){
			if (this.props.cart[item] == id) quant++;
        }
		return quant;
    }
    
    totalPricesArray() {
		let cartItems = this.props.cart;
		let getPricesById = (id) => { return this.getItemById(id).price };
		let prices = [];
		this.props.cart.map(function (key) {
			prices.push(getPricesById(key));
		})
		return prices;
    }
    
    removeFromCart(id){
        this.props.removeCart(id);
    }

    render(){

        let total = this.totalPricesArray().reduce(function (prev, next) {
			return prev + next;
        }, 0)
        let rendered = [];

        return(
            <div className='container-fluid app'>
                <div className='row header p-3'>
                    <SearchBar />
                </div>
                <div className="row">
                        <div className="container-fluid">
                            <div className="heading">
                                <h1 className="title">My Cart</h1>
                            </div>
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th><abbr>ID</abbr></th>
                                        <th><abbr>Image</abbr></th>
                                        <th><abbr>Title</abbr></th>
                                        <th><abbr>Quality</abbr></th>
                                        <th>Price</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tfoot>
                                    <tr>
                                        <th>&nbsp;</th>
                                        <th>&nbsp;</th>
                                        <th>&nbsp;</th>
                                        <th>&nbsp;</th>
                                        <th>Total:₹{total}</th>
                                    </tr>
                                </tfoot>
                                <tbody>
                                    {
                                        this.props.cart.map((key) => {
                                            if(rendered.indexOf(key) == -1){
                                                let product = this.getItemById(key);
                                                let quantity = this.getQuantity(key);
                                                rendered.push(key);
                                                return (<CartItem key={key} removeFromCart={this.removeFromCart.bind(this)} quantity={quantity} product={product} />)
                                            }
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                </div>
            </div>

            
        );
    }

}

const mapStateToProps = (state) => {
	return {
		cart: state.cartProducts,
		products: state.Products
	}
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ 
        removeCart: removeCart
    },dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);