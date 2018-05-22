import React, { Component } from 'react'
import './AddTask.css'
import { Modal } from 'react-bootstrap';

class AddTask extends Component {
  constructor(props){
    super(props)
    this.handleClose = this.handleClose.bind(this)
    this.handleShow = this.handleShow.bind(this)
    this.handleAdd = this.handleAdd.bind(this)
    this.state = {
      show : false
    }
  }

  handleClose(){
    this.setState({
      show : false
    })
  }

  handleShow(){
    this.setState({
      show : true
    })
  }

  handleAdd(){
    alert('add')
  }

  render() {
    return (
      <div className="row">
          <div className="col-sm-8">
            <h3 className="AddTask-header">React Task Manager</h3>
          </div>
          <div className="col-sm-4">
            <button type="button" className="btn btn-success AddTask-button" onClick = {this.handleShow}>Add</button>
          </div>
          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header>
              <Modal.Title>React Task Manager</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form>
                  <div className="form-group">
                      <input type="text" className="form-control" id="inputTask" placeholder="Enter task to add"></input>
                  </div>
                  <button type="button" onClick={this.handleAdd} className="btn btn-primary">Add </button>
              </form>
            </Modal.Body>
          </Modal>
      </div>
    );
  }
}

export default AddTask;
