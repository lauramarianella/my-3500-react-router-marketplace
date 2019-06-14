import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './myApp.css';

//Item(description, price, image, id, sellerId)
class MyItem extends Component {
  render() {
    return (
      <div className="card center">
        <h1>ItemId: {this.props.id} </h1>
        <h3>{this.props.description}</h3>
        <div>Price: ${this.props.price}</div>
        <div>
          <Link to={'/seller/' + this.props.sellerId}>Visit seller</Link>
        </div>
        <img src={this.props.image} />
      </div>
    );
  }
}

export default MyItem;
