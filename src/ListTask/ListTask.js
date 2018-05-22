import React, { Component } from 'react'
import './ListTask.css'

class ListTask extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-sm-12">
          <ul className="list-group">
              <li className="list-group-item">Cras justo odio</li>
              <li className="list-group-item">Dapibus ac facilisis in</li>
              <li className="list-group-item">Morbi leo risus</li>
              <li className="list-group-item">Porta ac consectetur ac</li>
              <li className="list-group-item">Vestibulum at eros</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default ListTask;
