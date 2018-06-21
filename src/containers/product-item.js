import React,{ Component} from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux'

import { addCart, addWL, removeWL } from '../actions/index';


class ProductItem extends Component{
    constructor(props){
        super(props);


        this.addToCart = this.addToCart.bind(this);
        this.forWL = this.forWL.bind(this);
        this.wlBtn = this.wlBtn.bind(this);
    }

    addToCart(event){
        this.props.addCart(this.props.product.id);
    }

    forWL(event){
        // console.log(this.props.wishlist, this.props.product)
        if(!this.wlBtn(this.props.product.id)){
            // console.log('bye')
            this.props.addWL(this.props.product.id);
        } else{
            // console.log('hii')
            this.props.removeWL(this.props.product.id);
        }
    }

    wlBtn(id){
        let check = false;
        if(this.props.wishlist.length>0){
            this.props.wishlist.map((key) => {
                if (key == id) check = true
            })
        }
		return check
    } 

    cartCheck(id){
        let check = false;
        if(this.props.cart.length>0){
            this.props.cart.map((key) => {
                if (key == id) check = true
            })
        }
		return check;
    }


    createLink(id){
        return '/product/'+id;
    }

    render(){

        return(
            <div className="card p-0 float-left">
                <Link to={this.createLink(this.props.product.id)}>
                <img width='277px' height='227px' className="card-img-top" 
                    title={this.props.product.image==''?'Cant find Image':''}
                    src={this.props.product.image==''?'https://www.nevada.ie/wp-content/uploads/2017/11/Page-not-found-design-1.png':this.props.product.image} alt={this.props.product.title} 
                />
                </Link>
                <div className="card-body">
                    <div className='text-right'>
                        <p className='text-left position-absolute'>₹{this.props.product.price}</p>
                        <button onClick={this.addToCart} 
                        className={`btn m-1 ${this.cartCheck(this.props.product.id)?'btn-success':'btn-primary'}`}>
                            <i className="fa fa-shopping-cart fa-fw" aria-hidden="true" />
                        </button>
                        <button onClick={this.forWL} 
                            className={`btn m-1 ${this.wlBtn(this.props.product.id)?'btn-success':'btn-danger'}`} 
                            id='product-page-wl' >
                                <i className="fa fa-heart-o" aria-hidden="true" />
                        </button>
                    </div>
                    <Link to={this.createLink(this.props.product.id)}>
                        <h5 className="card-title product-title mt-1">{this.props.product.title}</h5>
                    </Link>
                    <div className="card-text">
                        
                    </div>
                    <div className="card-text"><small className="text-muted"><p> Brand:{this.props.product.brand}</p></small></div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state){
    return({
        wishlist: state.wlProducts,
        cart: state.cartProducts
    });
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ 
        addCart: addCart,
        addWL: addWL,
        removeWL: removeWL
    },dispatch);
}

export default connect (mapStateToProps,mapDispatchToProps)(ProductItem);