
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index'
class TaskFrom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }
  componentDidMount(){
    if(this.props.taskEdit && this.props.taskEdit.id !== null){
       this.setState({
        id: this.props.taskEdit.id,
        name: this.props.taskEdit.name,
        status: this.props.taskEdit.status
       })
    }
    console.log("hello");
  }
  componentWillReceiveProps(nextProps){
    if(nextProps && nextProps.taskEdit){
      this.setState({
       id: nextProps.taskEdit.id,
       name: nextProps.taskEdit.name,
       status: nextProps.taskEdit.status
      })
   }else if(!nextProps.taskEdit){
      this.onClean();
   }
  }
  inputState = (event) => {
    const e = event.target;
    let name = e.name;
    let value = e.value;
    if (name === 'status') {
      value = e.value === "true" ? true : false
    }
    this.setState({
      [name]: value
    })
  }
  submitFrom = (e) => {
    e.preventDefault();
    this.props.onSaveTask(this.state)
    this.onClean();
  }
  onClean =  () =>{
    this.setState({
      name: '',
      status:false
    })
  }
  render() {
    const { id } = this.state;
    if(!this.props.displayFrom) return '';  
    return (

      <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
        <div className="panel panel-warning">
          <div className="panel-heading">
            <h3 className="panel-title"> {id ? "Sửa công việc" : "Thêm công việc"}</h3>
          </div>
          <div className="panel-body">
            <form onSubmit={this.submitFrom}>
              <div className="form-group">
                <label>Tên :</label>
                <input type="text" name="name" value={this.state.name} onChange={this.inputState} className="form-control" />
              </div>
              <label>Trạng Thái :</label>
              <select className="form-control" name="status" value={this.state.status} onChange={this.inputState} required="required">
                <option value={true}>Kích Hoạt</option>
                <option value={false}>Ẩn</option>
              </select>
              <br />
              <div className="text-center">
                <button type="submit" className="btn btn-warning">{id ? "Sửa" : "Thêm"}</button>&nbsp;
                <button type="button" className="btn btn-danger" onClick={this.onClean}
                >Hủy Bỏ</button>    
              </div>
            </form>
            
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state =>{
  return{
    displayFrom : state.displayFrom,
    taskEdit : state.editTask
  }
};
const mapDispatchToProps = (dispatch, props) =>{
  return{
    onSaveTask: (task) =>{
      dispatch(actions.saveTask(task))
    }
    
  }
}




export default connect(mapStateToProps,mapDispatchToProps) (TaskFrom);
