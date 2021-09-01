import React, { Component } from 'react';


class SortFrom extends Component {

 
  onSortItem = (sortBy, sortValue) =>{
      this.props.onSort(sortBy,sortValue);
  }
    render() {
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="dropdown">
                  <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    Sắp Xếp <span className="fa fa-caret-square-o-down "></span>
                  </button>
                  <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                    <li  onClick={ () => {this.onSortItem("name" , 1 )}}>
                      <p role="button" className={(this.props.sortBy === "name" && this.props.sortValue === 1 ? "fas fa-check pr-5 ml-5" : "")}  >
                        <span className="fa fa-sort-alpha-asc pr-5 ml-5  ">
                          Tên A-Z
                                                </span>
                      </p>
                    </li>
                    <li onClick={ () => {this.onSortItem("name" , -1 )}}>
                      <p role="button" className={(this.props.sortBy === "name" && this.props.sortValue === -1 ? "fas fa-check pr-5 ml-5" : "")}
                       >
                        <span className="fa fa-sort-alpha-desc pr-5 ml-5">
                          Tên Z-A
                                                </span>
                      </p>
                    </li>
                    <li role="separator" className="divider"></li>
                    <li onClick={ () => {this.onSortItem("status" , 1 )}}>
                      <p role="button" className={(this.props.sortBy === "status" && this.props.sortValue === 1 ? "fas fa-check pr-5 ml-5" : "")}
                  
                    ><span className="ml-5">Trạng Thái Kích Hoạt</span></p></li>
                    <li onClick={ () => {this.onSortItem("status" , -1 )}}>
                      <p role="button" className={(this.props.sortBy === "status" && this.props.sortValue === -1 ? "fas fa-check pr-5 ml-5" : "")}
                    
                    ><span className="ml-5">Trạng Thái Ẩn</span></p></li>
                  </ul>
                </div>
              </div>
        );
    }
}

export default SortFrom;