import React, { Component } from 'react';
import './myApp.css';
import styled from 'styled-components';

const Button = styled.button`
  padding: 10px;
  border-radius: 5px;
  background: blue;
  color: #fff;
`;

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

    //alert('Save the data');

    let newSeller = {
      id: this.state.sellerId,
      name: this.state.sellerName,
      rating: this.state.sellerRating,
    };

    this.props.sellers.push(newSeller);

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
            {/* <input type="submit" value="Add Seller" /> */}
            <Button>Add Seller</Button>
          </div>
        </form>
      </div>
    );
  }
}

export default MyFormAddSeller;
