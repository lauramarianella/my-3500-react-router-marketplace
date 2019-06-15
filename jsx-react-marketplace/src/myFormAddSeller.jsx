import React, { Component } from 'react';
import './myApp.css';

class MyFormAddSeller extends Component {
  constructor() {
    super();
    this.state = {
      //seller
      sellerId: '',
      sellerName: '',
      sellerRating: '',
    };

    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onSubmitHandler = (ev) => {
    ev.preventDefault();

    alert('Save the data');

    this.setState({
      sellerId: '',
      sellerName: '',
      sellerRating: '',
    });
  };

  onChangeHandler = (ev) => {
    //alert('Change element');
    this.setState({ [ev.target.name]: ev.target.value });
  };

  render() {
    return (
      <div className="myCard myCenter">
        <h1>Add Seller</h1>
        <form onSubmit={this.onSubmitHandler}>
          <div>
            <input
              type="text"
              name="sellerId"
              placeholder="id"
              onChange={this.onChangeHandler}
              value={this.state.sellerId}
            />
          </div>
          <div>
            <input
              type="text"
              name="sellerName"
              placeholder="name"
              onChange={this.onChangeHandler}
              value={this.sellerName}
            />
          </div>
          <div>
            <input
              type="text"
              name="sellerRating"
              placeholder="rating"
              onChange={this.onChangeHandler}
              value={this.sellerRating}
            />
          </div>

          <div>
            <input type="submit" value="Add Seller" />
          </div>
        </form>
      </div>
    );
  }
}

export default MyFormAddSeller;
