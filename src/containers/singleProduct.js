import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

import SearchBar from './search_bar';
import ProductPageDetails from './product-page-details';


class SingleProduct extends Component{

    constructor(props){
        super(props);
        this.props.Products.forEach((product)=>{
            if(product.id == this.props.match.params.id ){
                this.product = product 
            }
        })
    }

    render(){
        // console.log(this.product)
        if(this.product !=  null){
        return(
            <div className='container-fluid app'>
                <div className='row header p-3'>
                <SearchBar />
                </div>
                <div className='row'>
                    <ProductPageDetails product={this.product}/>
                    <div className="col-md-8 p-0 bg-dark">
                        <div className="back-btn">
                            <Link to='/'>
                            <i className="fa fa-arrow-left p-1" aria-hidden="true"></i>
                            </Link>
                        </div>
                        <img className='img-fluid product-page-img' 
                            src={this.product.image==''?'https://www.nevada.ie/wp-content/uploads/2017/11/Page-not-found-design-1.png':this.product.image}
                            alt={this.product.title}/>
                    </div>
                </div>
            </div>
        );
        } else{
            return(
                <div className='container-fluid app'>
                    <div className='row header p-3'>
                    <SearchBar />
                    </div>
                    <div className='row'>
                        <div className="col-md 5">
                            <h2 className='text-center text-danger'>OOPS!!! worong Product Id</h2> 
                        </div>
                    </div>
                </div>
            );
        }
    }

}

function mapStateToProps(state){
    return({Products: state.Products});
}

export default withRouter(connect(mapStateToProps)(SingleProduct));