import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import SearchBar from './search_bar';
import WishListItem from '../components/wishlistItem';

import { removeWL } from '../actions/index';

class WishList extends Component{

    getItemById(id) {
		let obj = {};
		this.props.products.map((item) => {
			if (item.id == id) obj = item;
        })
		return obj;
    }
    
    removeFromWL(id){
        this.props.removeWL(id);
    }

    render(){

        return(
            <div className='container-fluid app'>
                <div className='row header p-3'>
                    <SearchBar />
                </div>
                <div className="row">
                        <div className="container-fluid">
                            <div className="heading">
                                <h1 className="title">My WishList</h1>
                            </div>
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th><abbr>ID</abbr></th>
                                        <th><abbr>Image</abbr></th>
                                        <th><abbr>Title</abbr></th>
                                        <th>Price</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.props.wishlist.map((key) => {
                                            let product = this.getItemById(key);
                                            return (<WishListItem key={key} removeFromWL={this.removeFromWL.bind(this)} product={product} />)
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
		wishlist: state.wlProducts,
		products: state.Products
	}
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ 
        removeWL: removeWL
    },dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(WishList);