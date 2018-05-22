import React, { Component } from 'react'
import './Container.css'
import List from '../ListTask/ListTask.js'
import AddTask from '../AddTask/AddTask.js'

class Container extends Component {
  render() {
    return (
      <div className="container Container-marginTop Container-color">
        <AddTask></AddTask>
        <List></List>
        <hr />
        <footer>
          <p>www.codehandbook.org</p>
        </footer>
      </div>
    );
  }
}

export default Container;
