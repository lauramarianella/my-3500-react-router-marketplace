import React, { Component } from 'react';
import './myApp.css';
import { initialItems, initialSellers } from './myData.js';
import MyItem from './myItem.jsx';
import MySeller from './mySeller.jsx';
import { BrowserRouter, Route } from 'react-router-dom';
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

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact={true} path="/" render={renderAllItems} />
          <Route exact={true} path="/seller/:sId" render={renderSeller} />
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
