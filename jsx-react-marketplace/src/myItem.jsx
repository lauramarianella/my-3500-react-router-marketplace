import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './myApp.css';

//Item(description, price, image, id, sellerId)
class MyItem extends Component {
  render() {
    return (
      <div className="card center">
        <h3>{this.props.description}</h3>
        <div>Price: ${this.props.price}</div>
        <div>
          <Link to={'/seller/' + this.props.sellerId}>Visit seller</Link>
        </div>
        <div>
          <Link to={'/details/' + this.props.id}>See details</Link>
        </div>
        <img src={this.props.image} />
      </div>
    );
  }
}

export default MyItem;
