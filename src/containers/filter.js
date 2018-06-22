
import React,{ Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import { setCategory, setSize, setPrice, setAvailable, setSrc } from '../actions/index';

class Filter extends Component{
    constructor(props){
        super(props);

        this.state = {
            source: 'Offline',
            isAvailable: true
        };

        this.OnChangePrice = this.OnChangePrice.bind(this);
        this.OnChangeSource = this.OnChangeSource.bind(this);
        this.OnChangeAvailability = this.OnChangeAvailability.bind(this);
        this.OnChangeCategory = this.OnChangeCategory.bind(this);
        this.OnChangeSize = this.OnChangeSize.bind(this);
    }

    renderCategories(){
        let arr = [];
        for(let i =0;i<this.props.Category.length;i++){
            arr.push(<option key={this.props.Category[i]} value={this.props.Category[i]}>{this.props.Category[i]}</option>);
        }
        return(arr);
    }

    renderSizes(){
        let arr = [];
        for(let i =0;i<this.props.Sizes.length;i++){
            arr.push(<option key={this.props.Sizes[i]} value={this.props.Sizes[i]}>{this.props.Sizes[i]}</option>);
        }
        return(arr);
    }

    OnChangePrice(event){
        if(event.target.value >100){
            this.props.selectPrice(100);
        } else if(event.target.value <=0){
            this.props.selectPrice(0);
        } else{
            this.props.selectPrice(event.target.value);
        }
    }

    OnChangeCategory(event){
        this.props.selectCategory(event.target.value);
    }

    OnChangeSize(event){
        this.props.selectSize(event.target.value);
    }

    OnChangeSource(event){
        this.props.selectSrc(event.target.value);
    }

    OnChangeAvailability(event){
        this.props.selectAvail(this.props.isAvail ? 0:1);
    }

    render(){
        return(
            <div className='col-md-2 border-right border-success d-none d-lg-block'>
            <h2>Filters</h2>
            <hr />
                <div className='input-group'>
                    <div className='input-group-prepend'>
                        <label className='input-group-text pl-0 pr-1' htmlFor='inputGroupSelect00'>Category</label>
                    </div>
                    <select
                        onChange={(this.OnChangeCategory)} 
                        value={this.props.selectedCategory}
                        className='custom-select pl-1' id='inputGroupSelect00'>
                        {this.renderCategories()}
                    </select>
                </div>
            <hr />
            <div>
                {/* <p>Price</p>
                <div>
                    <input type='range'
                    value={this.props.Price}
                    onChange={this.OnChangePrice}
                    min='0' max='100' />
                    <input type='number' 
                        onChange={this.OnChangePrice} 
                        min='0'
                        max='100'
                        value={this.props.Price} className='price-filter-text' />
                </div>
                <hr /> */}
                <div className='input-group'>
                    <div className='input-group-prepend'>
                        <label className='input-group-text' htmlFor='inputGroupSelect01'>Size</label>
                    </div>
                    <select 
                        onChange={this.OnChangeSize}
                        value={this.props.selectedSize}
                        className='custom-select' id='inputGroupSelect01'>
                        {this.renderSizes()}
                    </select>
                </div>
                <hr />
                <div className='input-group'>
                    <div className='input-group-prepend'>
                        <label className='input-group-text' htmlFor='inputGroupSelect02'>Source</label>
                    </div>
                    <select
                        onChange={this.OnChangeSource} 
                        value={this.props.src}
                        className='custom-select' id='inputGroupSelect02'>
                        <option value='All'>All</option>
                        <option value='Online'>Online</option>
                        <option value='Offline'>Offline</option>
                    </select>
                </div>
                <hr />
                <div className='form-check'>
                    <input 
                        checked={this.props.isAvail?true:false}
                        onChange={this.OnChangeAvailability}
                        className='form-check-input' type='checkbox' id='inputCheckBox01' />
                    <label className='form-check-label' htmlFor='inputCheckBox01'>In Stock</label>
                </div>
            </div>
            </div>
        );
    }
}

function mapStateToProps(state){
    return({
        Category: state.Categories.categories,
        selectedCategory: state.selectedCategory,
        selectedSize: state.selectedSize,
        Sizes: state.Sizes.sList,
        Price: state.selectedPrice,
        isAvail: state.isAvailable,
        src: state.selectedSrc
    });
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ 
        selectCategory: setCategory,
        selectSize: setSize,
        selectPrice: setPrice,
        selectAvail: setAvailable,
        selectSrc: setSrc
    },dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);