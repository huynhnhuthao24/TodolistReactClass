
import './App.css';

import React, { Component } from 'react';
import TaskFrom from './components/TaskFrom';
import FilterFrom from './components/FilterFrom';
import TableFrom from './components/TableFrom';
import * as actions from './actions/index';
import { connect } from 'react-redux';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      sortBy: 'name',
      sortValue: null
    }
  }
  
  onToggleFrom = () =>{
    if(this.props.editTask && this.props.editTask.id){
      this.props.onOpenFrom();
    }
    else{
      this.props.onToggleFrom();
    }
    this.props.onCleanTask({
      id: '',
      name: '',
      status: false
    });
    
  }
  onShowForm = () =>{
    this.setState({
      isDisplayFrom: true
    })
  }
  onForm = () =>{
    this.onShowForm();
  }
  onFilter =  (keyword,stt)  =>{
     stt = parseInt(stt ,10)
      this.setState({
        filter:{
          name: keyword.toLowerCase(),
          status: stt
        }
      })
  }
  onClickSearch = (Q) =>{
    this.setState({
      searchTern: Q
    })
  }
  onSortApp = (sortBy,sortValue) =>{
   
    this.setState({
        sortBy: sortBy,
        sortValue: sortValue
    })
  }
  render() {
    let { sortBy,sortValue} = this.state;
    var { displayFrom } = this.props;
    
   
    // 
    // if(sortBy){
    //   tasks.sort((a,b) =>{
    //     if(a.name > b.name) return sortValue;
    //     else if(a.name < b.name) return -sortValue;
    //     else return 0;
    //    })
    // }
    // if(sortValue){
    //   tasks.sort((a,b) =>{
    //     if(a.status > b.status) return -sortValue;
    //     else if(a.status < b.status) return sortValue;
    //     else return 0;
    //    })
    // }
    
    return (
      <div className="container">
        <div className="text-center">
          <h1>Quản Lý Công Việc</h1>
          <hr />
        </div>
        <div className="row">
          <TaskFrom />
          <div className={displayFrom ? "col-xs-8 col-sm-8 col-md-8 col-lg-8" : "col-xs-12 col-sm-12 col-md-12 col-lg-12"}>
            <button type="button" onClick={this.onToggleFrom} className="btn btn-primary">
              <span className="fa fa-plus mr-5"></span>Thêm Công Việc
                </button>
                
            <FilterFrom sortBy={sortBy} sortValue={sortValue} onSearch={this.onClickSearch} onSort={this.onSortApp}/>
            <div className="row mt-15">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <TableFrom   onFilter={this.onFilter} onForm={this.onForm} onUpdateItem={this.onChangeData} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStatetoProps =  state => {
      return {
        displayFrom : state.displayFrom,
        editTask : state.editTask
      };
}

const mapDispatchToProps = (dispatch, props) =>{
      return {
        onOpenFrom : () =>{
          dispatch(actions.openFrom());
        },
        onToggleFrom : () =>{
          dispatch(actions.toggleFrom());
        },
        onSaveTask: (task) =>{
          dispatch(actions.saveTask(task))
        },
        onCleanTask: (task) =>{
          dispatch(actions.editTask(task))
        }
      };
}

App.propTypes = {

};

export default connect(mapStatetoProps,mapDispatchToProps) (App);
