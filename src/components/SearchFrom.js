import React, { Component } from 'react';
import * as actions from '../actions/index'
import { connect } from 'react-redux'
class SearchFrom extends Component {
  constructor(props){
    super(props)
    this.state = {
      searchTern: ''
    }
  }
  onSearchTern = (event) =>{
    let target = event.target;
    let name = target.name;
    let value = target.value;
    this.setState({
      [name] : value
    })
  }
  onClickSearch = () =>{
    this.props.onSearchTern(this.state.searchTern);
  }
  render() {
    var { searchTern } =this.state;
     
        return (
            
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="input-group">
                  <input 
                  type="text" 
                  className="form-control" 
                  placeholder="Nhập từ khóa..."
                  name="searchTern"
                  value={searchTern}
                  onChange={this.onSearchTern}
                  />
                  <span className="input-group-btn">
                    <button className="btn btn-primary" onClick={this.onClickSearch} type="button">
                      <span className="fa fa-search mr-5"></span>Tìm
                            </button>
                  </span>
                </div>
              </div>
              
           
        );
    }
}
const mapStateToProps = (state) =>{
  return { 
    searchTern: state.searchTern
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return{
    onSearchTern : (searchTern) =>{
      dispatch(actions.searchTask(searchTern));
    }
  }
}



export default connect(mapStateToProps, mapDispatchToProps) (SearchFrom) ;