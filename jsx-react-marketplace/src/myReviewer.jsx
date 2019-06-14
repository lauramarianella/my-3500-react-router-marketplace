import React, { Component } from 'react';
import './myApp.css';

//Reviewer(id, name, rating)
class MyReviewer extends Component {
  render() {
    return (
      <div className="card center">
        Reviewer Id: {this.props.id}
        <div>Name: {this.props.name}</div>
      </div>
    );
  }
}

export default MyReviewer;
