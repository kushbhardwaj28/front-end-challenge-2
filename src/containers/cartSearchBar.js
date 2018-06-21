import React,{ Component } from 'react';
import { connect } from 'react-redux';

class Cart extends Component{
    constructor(props){
        super(props);
    }

    render(){
        // console.log(this.props.wl.length)
        return(
            <div className='col-2'>
                <button className='btn float-right bg-primary text-white'>
                    <i 
                    className="fa fa-shopping-cart fa-fw" 
                    aria-hidden="true" 
                    />
                    <span className="badge badge-light ">{this.props.cart.length}</span>
                </button>
                <button className='btn float-right bg-danger mr-1 text-white'>
                    <i 
                    className="fa fa-heart-o" 
                    aria-hidden="true" 
                    />
                    <span className="badge badge-light ">{this.props.wl.length}</span>
                </button>
            </div>
        );
    }
}

function mapStateToProps(state){
    // console.log(state)
    return({
        cart: state.cartProducts,
        wl: state.wlProducts
    });
}

export default connect (mapStateToProps)(Cart);