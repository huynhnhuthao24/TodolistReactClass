import React, { Component } from 'react';
import SearchFrom from './SearchFrom';
import SortFrom from './SortFrom';

class FilterFrom extends Component {
    render() {
        return (
            <div className="row mt-15">
              <SearchFrom onSearch={this.props.onSearch}/>
              <SortFrom sortBy={this.props.sortBy} sortValue={this.props.sortValue} onSort={this.props.onSort}/>
            </div>
        );
    }
}


export default FilterFrom;