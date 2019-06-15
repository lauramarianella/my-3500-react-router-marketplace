import React, { Component } from 'react';
import './myApp.css';

//Item(description, price, image, id, sellerId)
class MyFormAddItem extends Component {
  constructor() {
    super();
    this.state = {
      //item
      itmDescription: '',
      itmPrice: '',
      itmStock: '',
      itmUrl: '',
      itmId: '',
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
      itmDescription: '',
      itmPrice: '',
      itmStock: '',
      itmUrl: '',
      itmId: '',
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
        <h1>Add Item</h1>
        <form onSubmit={this.onSubmitHandler}>
          <div>
            <input
              type="text"
              name="itmDescription"
              placeholder="Item description"
              onChange={this.onChangeHandler}
              value={this.state.itmDescription}
            />
          </div>
          <div>
            <input
              type="text"
              name="itmPrice"
              placeholder="price"
              onChange={this.onChangeHandler}
              value={this.state.itmPrice}
            />
          </div>
          <div>
            <input
              type="text"
              name="itmStock"
              placeholder="stock"
              onChange={this.onChangeHandler}
              value={this.state.itmStock}
            />
          </div>
          <div>
            <input
              type="text"
              name="itmUrl"
              placeholder="url"
              onChange={this.onChangeHandler}
              value={this.state.itmUrl}
            />
          </div>
          <div>
            <input
              type="text"
              name="itmId"
              placeholder="Item id"
              onChange={this.onChangeHandler}
              value={this.state.itmId}
            />
          </div>

          <div>
            <input type="submit" value="Add Item" />
          </div>
        </form>
      </div>
    );
  }
}

export default MyFormAddItem;
