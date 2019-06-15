import React, { Component } from 'react';
import './myApp.css';

import {
  initialItems,
  initialSellers,
  itemsReviews,
  reviewers,
} from './myData.js';

import MyItem from './myItem.jsx';
import MySeller from './mySeller.jsx';
import MyItemDetails from './myItemDetails.jsx';
import MyReviewer from './myReviewer.jsx';

import MyFormAddItem from './myFormAddItem.jsx';
import MyFormAddSeller from './myFormAddSeller.jsx';

import { BrowserRouter, Route, Link } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      initialItems: [],
      initialSellers: [],
      itemsReviews: [],
      reviewers: [],
    };
  }

  //Item(description, price, image, id, sellerId)
  renderAllItems = () => {
    return (
      <div>
        {this.state.initialItems.map((item) => {
          return (
            <div>
              <MyItem
                description={item.description}
                price={item.price}
                image={item.image}
                id={item.id}
                sellerId={item.sellerId}
              />
            </div>
          );
        })}
      </div>
    );
  };

  renderAllSellers = () => {
    return (
      <div>
        {this.state.initialSellers.map((seller) => (
          <MySeller id={seller.id} name={seller.name} rating={seller.rating} />
        ))}
      </div>
    );
  };

  //path in address bar-::-                 http://localhost:3000/item/abc
  //Route path prop-::-                     /item/:id
  //render function parameter-::-           rd
  //wildcard expression-::-                 rd.match.params.id
  //value of wildcard expression-::-        "abc"
  renderSeller = (renderParameter) => {
    let idSeller = renderParameter.match.params.sId; //alert(idSeller);
    let seller = this.state.initialSellers.find(
      (seller) => seller.id === idSeller
    );
    if (seller == undefined) return <div>Seller not found</div>;
    //Seller(id, name, rating)
    return (
      <MySeller id={seller.id} name={seller.name} rating={seller.rating} />
    );
  };

  renderItemDetails = (renderParameter) => {
    let idItem = renderParameter.match.params.itemId; //alert(idItem);
    let itemArray = this.state.initialItems.filter((item) => item.id == idItem);
    let item = itemArray[0];

    let itemReviews = this.state.itemsReviews.filter(
      (itemReview) => itemReview.idItem === idItem
    );
    return (
      <MyItemDetails
        numberLeftInStock={item.number_left_in_stock}
        description={item.description}
        price={item.price}
        image={item.image}
        id={item.id}
        reviews={itemReviews}
      />
    );
  };

  renderReviewer = (renderParameter) => {
    let idReviewer = renderParameter.match.params.rId;
    let reviewer = this.state.reviewers.find(
      (reviewer) => reviewer.id === idReviewer
    );
    if (reviewer == undefined) return <div>Reviewer not found</div>;
    //Seller(id, name
    return <MyReviewer id={reviewer.id} name={reviewer.name} />;
  };

  //description,price,stock,url,id
  renderAddItemForm = () => {
    return <MyFormAddItem items={this.state.initialItems} />;
  };

  //id,name,rating
  renderAddSellerForm = () => {
    return <MyFormAddSeller sellers={this.state.initialSellers} />;
  };

  componentDidMount() {
    this.setState({
      initialItems: initialItems,
      initialSellers: initialSellers,
      itemsReviews: itemsReviews,
      reviewers: reviewers,
    });
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <div>
            <Link to="/">Home</Link>
          </div>
          <div>
            <Link to="/AddItem">Add Item</Link>
          </div>

          <div>
            <Link to="/sellers">Visit all sellers</Link>
          </div>
          <div>
            <Link to="/addSeller">Add Seller</Link>
          </div>

          <Route exact={true} path="/" render={this.renderAllItems} />
          <Route exact={true} path="/sellers" render={this.renderAllSellers} />
          <Route exact={true} path="/seller/:sId" render={this.renderSeller} />
          <Route
            exact={true}
            path="/details/:itemId"
            render={this.renderItemDetails}
          />

          <Route
            exact={true}
            path="/reviewer/:rId"
            render={this.renderReviewer}
          />

          <Route exact={true} path="/AddItem" render={this.renderAddItemForm} />
          <Route
            exact={true}
            path="/AddSeller"
            render={this.renderAddSellerForm}
          />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
// <div className="App">
//   <header className="App-header">
//     <img src={logo} className="App-logo" alt="logo" />
//     <p>
//       Edit <code>src/App.js</code> and save to reload.
//     </p>
//     <a
//       className="App-link"
//       href="https://reactjs.org"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       Learn React
//     </a>
//   </header>
// </div>
