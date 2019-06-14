import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './myApp.css';

//ItemReview(idItem, review, idReviewer)
class MyItemReview extends Component {
  render() {
    let reviewObj = this.props.review;
    return (
      <div>
        <h3>{reviewObj.idItem}</h3>
        <div>Review: {reviewObj.review}</div>
        <div>
          <Link to={'/reviewer/' + reviewObj.idReviewer}>See reviewer</Link>
        </div>
      </div>
    );
  }
}

export default MyItemReview;
