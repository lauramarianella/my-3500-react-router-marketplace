import React, { Component } from 'react';
import './myApp.css';

//Seller(id, name, rating)
class MySeller extends Component {
  render() {
    return (
      <div className="card center">
        ItemId: {this.props.id}
        <div>Name: {this.props.name}</div>
        Rating: {this.props.rating}
      </div>
    );
  }
}

export default MySeller;
