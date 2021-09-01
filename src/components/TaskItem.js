import React, { Component } from 'react';
import * as actions from '../actions/index';
import { connect } from 'react-redux';

class TaskItem extends Component {
  

  onUpdateStatus = () => {
    this.props.onUpdateStatus(this.props.data.id);
    

  }
  onDeleteItem = () => {
    this.props.onDeleteTask(this.props.data.id);

  }
  onForm = () =>{
    // this.props.onForm(this.props.data.id);
    this.props.onOpenFrom();
    this.props.onEditTask(this.props.data);
  }
  
  render() {
    const { data, index } = this.props;
    return (
      <tr>
        <td>{index + 1}</td>
        <td>{data.name}</td>
        <td className="text-center">
          <span className={data.status === true ? "label label-success" : "label label-danger"}
            onClick={this.onUpdateStatus}
          >
            {data.status === true ? "Done" : "Not yet"}
          </span>
        </td>
        <td className="text-center">
          <button type="button" className="btn btn-warning" onClick={this.onForm} >
            <span className="fa fa-pencil mr-5" ></span>Sửa
          </button>
          &nbsp;
          <button type="button" className="btn btn-danger"onClick={this.onDeleteItem}>
            <span className="fa fa-trash mr-5" >
            </span>Xóa
          </button>
        </td>
      </tr>
    );
  }
}
const mapStatetoProps =  state => {
  return {

  };
}

const mapDispatchToProps = (dispatch, props) =>{
  return {
    onUpdateStatus : (id) =>{
      dispatch(actions.updateStatusTask(id))
    },
    onDeleteTask : (id) =>{
      dispatch(actions.deleteTask(id))
    },
    onOpenFrom : () =>{
      dispatch(actions.openFrom());
    },
    onEditTask : (task) =>{
      dispatch(actions.editTask(task));
    },
  };
}



export default connect(mapStatetoProps,mapDispatchToProps) (TaskItem);