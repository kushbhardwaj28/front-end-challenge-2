import React,{ Component} from 'react';
import {connect} from 'react-redux';

import ProductItem from './product-item';


class ProductList extends Component{
    constructor(props){
        super(props);

        this.productItems = [];
    }

    filterCategory(list){
        let productItem = [];
        
        list.map((product)=> {
            if(this.props.selectedCategory!= null || this.props.selectedCategory=='null'){
                if(this.props.selectedCategory == product.category){
                    productItem.push(product);
                }
            }
        });
        return productItem;
    }
    filterSizeNSrc(list){
        let productItem = [];

        list.map((product)=> {
            let haveSrc = false;
            for(let size in product.sizes){
                if(size == this.props.selectedSize){
                    if(this.props.selectedSrc != 'All'){
                        let sizeArr = product.sizes[size];
                        for(let src in sizeArr.sources){
                            if(sizeArr.sources[src].source_type == this.props.selectedSrc.toLowerCase()){
                                haveSrc = true;
                                break;
                            } 
                        };
                        haveSrc? productItem.push(product):'';
                    } else{
                        productItem.push(product);
                    }
                }
            }
        });
        return productItem;
    }

    filterStock(list){
        let productItem = [];
        
        list.map((product)=> {
            if(product.instock == true) {
                productItem.push(product);
            }
        });
        return productItem;
    }

    createProduct(list){
        let productItem = [];
        productItem = this.props.selectedCategory != 'All' ? this.filterCategory(list): list;
        productItem = this.props.selectedSize != 'All' ?this.filterSizeNSrc(productItem): productItem;
        productItem = this.props.isAvailable == 1?this.filterStock(productItem):productItem;


        let pList = [];
        productItem.map((product)=> {
            pList.push(<ProductItem key={product.id} product={product} />);
        });
        if(productItem.length <= 0){
            pList.push(
                <h3>No Item Matched</h3>
            );
        }
        return pList;
    }

    createGrid(){
        this.productItems = this.createProduct(this.props.Products);
        let row=[];
        for(let j=0; j<this.productItems.length; j++){
            row.push(<li key={this.productItems[j].key} className="col-sm-6 col-md-4 col-lg-3 product-item p-3">
                {this.productItems[j]}
            </li>)
        }
        return row;
    }

    render(){
        return(
            <ul className='col-md-12 col-lg-10 product-list'>
                {this.createGrid()}
            </ul>
        );
    }
}

function mapStateToProps(state){
    console.log(state)
    return({ 
        Products: state.Products,
        selectedCategory: state.selectedCategory,
        selectedSize: state.selectedSize,
        selectedSrc: state.selectedSrc,
        selectedPrice: state.selectedPrice,
        isAvailable: state.isAvailable,
    });
}

export default connect(mapStateToProps)(ProductList);