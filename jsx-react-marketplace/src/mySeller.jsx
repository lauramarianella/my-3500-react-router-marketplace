import React, { Component } from 'react';
import './myApp.css';
import { initialItems } from './myData.js';
import { Link } from 'react-router-dom';

//Seller(id, name, rating)
class MySeller extends Component {
  render() {
    return (
      <div className="card center">
        ItemId: {this.props.id}
        <div>Name: {this.props.name}</div>
        Rating: {this.props.rating}
        <h3>Items to sell:</h3>
        <div>
          {initialItems
            .filter((item) => item.sellerId === this.props.id)
            .map((item) => (
              <div>
                <Link to={`/details/${item.id}`}> {item.description} </Link>
              </div>
            ))}
        </div>
      </div>
    );
  }
}

export default MySeller;
