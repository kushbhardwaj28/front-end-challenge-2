import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { setSize, addCart, addWL, removeWL } from '../actions/index';

class ProductPageDetails extends Component {

    constructor(props){
        super(props);
        console.log(this.props.product);

        this.state = {
            sizeSrc: '',
            size: '',
            inCart: this.cartCheck(this.props.product.id)
        }

        this.getSize = this.getSize.bind(this);
        this.changeSize = this.changeSize.bind(this);
        this.renderDealer = this.renderDealer.bind(this);
        this.showDealer = this.showDealer.bind(this);
        this.addToCart = this.addToCart.bind(this);
        this.forWL = this.forWL.bind(this);
        this.wlbutton = this.wlbutton.bind(this);
        this.successCart = this.successCart.bind(this);
    }

    addToCart(event){
        this.setState({inCart: true});
        this.props.addCart(this.props.product.id);
    }

    forWL(event){
        if(!this.wlbutton(this.props.product.id)){
            this.props.addWL(this.props.product.id);
        } else{
            this.props.removeWL(this.props.product.id);
        }
    }

    getGender(str){
        if(str == 'Men'){
            return(<i className="fa fa-mars text-primary font-weight-bold" aria-hidden="true"></i>)
        } else{
            return(<i className="fa fa-venus text-pink font-weight-bold" aria-hidden="true"></i>);
        }
    }

    getSize(){
        let sizes = [];
        for(let size in this.props.product.sizes){
            if(size == this.props.selectedSize){
                sizes.push(<button key={size} onClick={this.changeSize} value={size} type="button" className="btn btn-primary active">{size}</button>);
            } else{
                sizes.push(<button key={size} onClick={this.changeSize} value={size} type="button" className="btn btn-primary">{size}</button>);
            }
        }
        return sizes;
    }

    changeSize(event){
        this.setState({'size': event.target.value})
        this.props.sizeSelector(event.target.value);
    }

    renderDealer(size){
        let loc = [];
        if(size != 'All'){
            this.props.product.sizes[size].sources.map((val)=>{
                if(val.id == this.state.sizeSrc){
                    loc.push(<button key={val.id} onClick={this.showDealer} value={val.id} type="button" className="btn btn-primary active">{val.city}, {val.state}</button>);
                } else{
                    loc.push(<button key={val.id} onClick={this.showDealer} value={val.id} type="button" className="btn btn-primary">{val.city}, {val.state}</button>);
                }
            });
        }
        return loc;
    }

    showDealer(event = null){
        if(event != null){
            this.setState({sizeSrc: event.target.value});
        }
        if(this.state.sizeSrc != ''){
            let dealer=[];
            this.props.product.sizes[this.state.size].sources.map((val)=>{
                if(val.id == this.state.sizeSrc){
                    dealer.push(<table className="product-details-table ">
                        <tbody>
                            <tr>
                            <td className='font-weight-bold'>Host</td>
                            <td>{val.host}</td>
                            </tr>
                            <tr>
                            <td className='font-weight-bold'>Is Available</td>
                            <td>{val.isavailable?'Yes':'No'}</td>
                            </tr>
                            <tr>
                            <td className='font-weight-bold'>Stock</td>
                            <td>{val.stock}</td>
                            </tr>
                            <tr>
                            <td className='font-weight-bold'>Discount Price</td>
                            <td>₹{val.discounted_price}</td>
                            </tr>
                        </tbody>
                    </table>);
                }
            })
            return(dealer);
        } else{
            return(<div></div>);
        }
    }

    wlbutton(id){
        let check = false;
        if(this.props.wishlist.length>0){
            this.props.wishlist.map((key) => {
                if (key == id) check = true
            })
        }
		return check;
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
    successCart(){
        if(this.state.inCart){
            return (<div className="alert alert-success m-0 p-2" role="alert">
                Product Added to cart
                </div>);
        } else{
            return '';
        }
    }

  render() {
      console.log(this.inWl);
    return (
        <div className="col-md-4">
            <div className="row justify-content-between mb-1">
                <h2 className='col-10'>{this.props.product.title}</h2>
                <button onClick={this.forWL} 
                className={`btn btn-outline-danger m-1 ${this.wlbutton(this.props.product.id)?'active':''}`} 
                id='product-page-wl' >
                    <i className="fa fa-heart-o" aria-hidden="true" />
                </button>
            </div> 
            <div className="row mb-3">
                <div className='bg-primary p-1 rounded text-white ml-1'>₹{this.props.product.price}</div>
            </div>
            <div className="row">
            <table className="product-details-table ">
                <tbody>
                    <tr>
                    <td className='font-weight-bold'>Brand</td>
                    <td>{this.props.product.brand}</td>
                    </tr>
                    <tr>
                    <td className='font-weight-bold'>Color</td>
                    <td>{this.props.product.color}</td>
                    </tr>
                    <tr>
                    <td className='font-weight-bold'>Type</td>
                    <td>{this.props.product.type}</td>
                    </tr>
                    <tr>
                    <td className='font-weight-bold'>Category</td>
                    <td>{this.props.product.category}</td>
                    </tr>
                    <tr>
                    <td className='font-weight-bold'>Sex</td>
                    <td>{this.getGender(this.props.product.sex)}</td>
                    </tr>
                    <tr>
                    <td className='font-weight-bold'>Family</td>
                    <td>{this.props.product.family}</td>
                    </tr>
                </tbody>
                </table>
            </div>
            <hr />
            <div className="row mb-2">
                <div className="btn-group m-auto" role="group" aria-label="Basic example">
                    {this.getSize()}
                </div>
            </div>
            <div className="row">
                <div className="btn-group-vertical m-auto" role="group" aria-label="Basic example">
                    {this.renderDealer(this.props.selectedSize)}
                </div>
            </div>
            <div className="row">
                {this.showDealer()}
            </div>
            <div className="row">
                <button onClick={this.addToCart} className={`btn m-1 ${this.cartCheck(this.props.product.id)?'btn-success':'btn-primary'}`}>
                    <i className="fa fa-shopping-cart fa-fw" aria-hidden="true" />
                    Add to cart
                </button>
                {this.successCart()}
            </div>
        </div>
    );
  }
}

function mapStatetoProps(state){
    return({
        selectedSize: state.selectedSize,
        selectedSrc: state.selectedSrc,
        wishlist: state.wlProducts,
        cart: state.cartProducts
    });
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ 
        sizeSelector: setSize,
        addCart: addCart,
        addWL: addWL,
        removeWL: removeWL
    },dispatch);
}

export default connect(mapStatetoProps, mapDispatchToProps)(ProductPageDetails);