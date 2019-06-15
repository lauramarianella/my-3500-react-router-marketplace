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

import { BrowserRouter, Route, Link } from 'react-router-dom';

//Item(description, price, image, id, sellerId)
let renderAllItems = () => {
  return (
    <div>
      {initialItems.map((item) => (
        <MyItem
          description={item.description}
          price={item.price}
          image={item.image}
          id={item.id}
          sellerId={item.sellerId}
        />
      ))}
    </div>
  );
};

let renderAllSellers = () => {
  return (
    <div>
      {initialSellers.map((seller) => (
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
let renderSeller = (renderParameter) => {
  let idSeller = renderParameter.match.params.sId; //alert(idSeller);
  let seller = initialSellers.find((seller) => seller.id === idSeller);
  if (seller == undefined) return <div>Seller not found</div>;
  //Seller(id, name, rating)
  return <MySeller id={seller.id} name={seller.name} rating={seller.rating} />;
};

let renderItemDetails = (renderParameter) => {
  let idItem = renderParameter.match.params.itemId; //alert(idItem);
  let itemArray = initialItems.filter((item) => item.id == idItem);
  let item = itemArray[0];

  let itemReviews = itemsReviews.filter(
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

let renderReviewer = (renderParameter) => {
  let idReviewer = renderParameter.match.params.rId;
  let reviewer = reviewers.find((reviewer) => reviewer.id === idReviewer);
  if (reviewer == undefined) return <div>Reviewer not found</div>;
  //Seller(id, name
  return <MyReviewer id={reviewer.id} name={reviewer.name} />;
};

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Link to="/sellers">Visit all sellers</Link>
          <Route exact={true} path="/" render={renderAllItems} />
          <Route exact={true} path="/sellers" render={renderAllSellers} />
          <Route exact={true} path="/seller/:sId" render={renderSeller} />
          <Route
            exact={true}
            path="/details/:itemId"
            render={renderItemDetails}
          />

          <Route exact={true} path="/reviewer/:rId" render={renderReviewer} />
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
