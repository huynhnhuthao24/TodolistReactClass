import React, { Component } from 'react';
import TaskItem from './TaskItem';
import * as actions from "../actions/index"
import { connect } from 'react-redux'

class TableFrom extends Component {
  constructor(props){
    super(props)
    this.state = {
      filterName: '',
      filterStatus: -1
    }
  }
  
  onFilterChange = (event) =>{
      var target = event.target;
      var name = target.name;
      var value = target.value;
      
      const filter = {
        name: name === 'filterName' ? value : this.state.filterName,
        status: name === 'filterStatus' ? value : this.state.filterStatus
      };
      this.props.onFilterTask(filter);
      this.setState({
        [name] : value,
        
      })
  }
          
  
    render() {
        var {tasks, filterTask,searchTern} = this.props;
        if(searchTern){
          tasks.filter((task) => {
            return task.name.toLowerCase().indexOf(searchTern.toLowerCase()) !== -1;
          });
        }
         if(filterTask){
            if(filterTask.name){
             tasks =  tasks.filter((task) =>{
              return task.name.toLowerCase().indexOf(filterTask.name) !== -1;
            })
          }
             tasks = tasks.filter((task) =>{
            if(filterTask.status === -1){
              return task;
            }else {
              return task.status === (filterTask.status === 1 ?  true : false);
              
            }
            
          })
          
        }
          
      
       
        
        const renderList  = tasks.map((data,index) =>{
            return (
                <TaskItem onForm={this.props.onForm} onUpdateItem={this.props.onUpdateItem}  key={index} data={data} index={index}/>
            )
            
        })
        
        
        return (
            <table className="table table-bordered table-hover mt-15">
                  <thead>
                    <tr>
                      <th className="text-center">STT</th>
                      <th className="text-center">Tên</th>
                      <th className="text-center">Trạng Thái</th>
                      <th className="text-center">Hành Động</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td></td>
                      <td>
                        <input 
                        type="text" 
                        className="form-control"
                        name="filterName"
                        value={filterTask.name}
                        onChange={this.onFilterChange}
                        />
                      </td>
                      <td>
                        <select className="form-control" value={filterTask.status} name="filterStatus" onChange={this.onFilterChange} >
                          <option value="-1">Tất Cả</option>
                          <option value="0">Ẩn</option>
                          <option value="1">Kích Hoạt</option>
                        </select>
                      </td>
                      <td></td>
                    </tr>
                    {renderList}
                  </tbody>
                </table>
        );
    }
}

const mapStateToProps = (state) =>{
  return {
    tasks: state.tasks,
    filterTask : state.filterTask,
    searchTern : state.searchTern

  }
}
const mapDispatchToProps = (dispatch, props) => {
  return{
    onFilterTask : (filter) =>{
      dispatch(actions.filterTask(filter));
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps) (TableFrom);