import React,{ Component } from 'react';
import { connect } from 'react-redux';

import Cart from './cartSearchBar';


class SearchBar extends Component {

    constructor(props){
        super(props);

        this.state = { val: ''};
        this.onInputChange = this.onInputChange.bind(this);
    }

    onFormSubmit(event){
        event.preventDefault();
    }

    onInputChange(event){
        this.setState({ val:event.target.value});
    }

    render(){
        return (
            <nav className='container '>
                <div className='row justify-content-between'>
                    <form 
                        className='input-group col-9'
                        onSubmit={this.onFormSubmit}
                    >
                        <input 
                        value={this.state.val}
                        onChange={this.onInputChange}
                        className='form-control search-bar'
                        />
                        <span className='input-group-btn search-btn'>
                        <button type='submit' className='btn btn-primary search-btn' ><i alt='search' className="fa fa-search fa-fw" aria-hidden="true" /></button>
                        </span>
                    </form>
                    <Cart />
                </div>
            </nav>
        );
    }
}

function mapStateToProps(state){
    return({
        Name: state.Name
    });
}

export default connect(mapStateToProps)(SearchBar);