import React, { Component } from 'react';
import './myApp.css';
import MyItemReview from './myItemReview';

class MyItemDetails extends Component {
  render() {
    return (
      <div className="myCard myCenter">
        <h1>ItemId: {this.props.id} </h1>
        <h3>{this.props.description}</h3>
        <div>Price: ${this.props.price}</div>
        <p>Left in stock: {this.props.numberLeftInStock}</p>
        <img src={this.props.image} className="mediumImg" />

        <h3>Reviews:</h3>
        {this.props.reviews.map((review) => (
          <MyItemReview review={review} />
        ))}
      </div>
    );
  }
}

export default MyItemDetails;
