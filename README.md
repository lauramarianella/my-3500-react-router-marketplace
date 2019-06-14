http://wakaworkshops.surge.sh/workshop/react-router-marketplace/slides/0

http://wakaworkshops.surge.sh/workshop/react-router-marketplace/slides/33
Instructions

Exercises
Question 1

Like the previous workshops, make a summary and then reproduce the project from the summary.
Question 2

There are only 2 items being sold by 2 people. Add 3 additional items and 1 seller. Make sure that every seller is selling at least one item.
Question 3

There might be 10 boats left and as a buyer I'd like to know that information.

Add a details page for each item. In the details page, display how many of that item is left in stock.

HINTS

Add a "number left in stock" field for each item. To do this, we're going to add a new "item details page" where we will display this information.

You will need to add a route for the details page. The path attribute of that route will look something like '/details/:itemId'

You will need to add a function to pass to the render attribute of the route

To extract the itemId in that function, use routerData.match.params.itemId (assuming routerData is the parameter of the function)
Question 4

The potential buyers would like to read reviews before making a purchase. Add reviews for the items.

Add the reviews to the item details page (already created in a previous question)

Question 5

The potential buyers would like to learn more about who wrote each review.

For each review, put a link to the reviewer. By clicking on the link, the user can see all the reviews that person has written.

Question 6

Your users want to see all the items that a seller is selling.

In the seller details page, display links to the items being sold by that seller.

Each item should have a link in the seller details page.

Question 7

Some users would like to see the list of all the sellers.

Add a link on the starting page that displays all the sellers. Create a link for each seller.
When a user clicks on the link, all the items being sold by that seller will be displayed.

Question 8

(super hard question) Add a form to add an item to be sold and another form to add a seller. For the image, let the seller put a url (Hint: you will need to put your data in the state)
Question 9

Use css to make your marketplace pretty

###############################NOTES:##################################
http://wakaworkshops.surge.sh/workshop/react-router-marketplace/slides/33

#########################DATA##########################
let initialItems = [
{
description: 'Nice boats.50% off. wow',
price: 10000,
image: '/boat.png',
id: 'asewq',
sellerId: 'ewio',
},

{
id: 'wqwasq',
description: 'Lawn chairs',
price: 50,
image: '/lawnchair.jpg',
sellerId: 'xcvb',
},
];

let initialSellers = [
{
id: 'ewio',
name: 'Jack Frost',
rating: '5 starts',
},

{
id: 'xcvb',
name: 'Hank Green',
rating: '2 starts',
},
];

export { initialItems, initialSellers };
#########################ITEM##########################
import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import './App.css'

class Item extends Component{
render(){
return(

<div clasName='card center'>
<img height="100px" src={this.props.imageLocation} />
<div>props description
<div>props. cost
<Link to={"/seller/" + props.sellerId> Link to seller
</div>
)
}
}
export default Item;

}

########################SELLER###########################
class Seller
render

<div className"card center"
<div>props.seller.name
<div>props.seller rating

########################ALL ITEMS###########################
import Route, BrowserRouter from 'react-router-dom'
import {itms,sellers} from './Data.js'

class App
render
<BrowserRouter>

<div>
<Route exact={true} path="/" render={renderAllItems}
<Route exct true path'/seller/:sid' render={renderSeller}

let renderAllItems = () =>{
return <div>
data.map( <Item props>

}

let renderSeller = (rd) =>{
sellerId = rd...sid
seller = data.filter()
return (<Seller props)
}

########################INSTRUCTIONS###########################
http://wakaworkshops.surge.sh/workshop/react-router-marketplace/slides/32
Instructions

Go over these questions to deepen your understanding

Question 1
What are the components in this project? What does each component do?
Item, Seller, App

Question 2
For each component, list the props that the component expects
Item(imgLocation, description, cost, sellerId)
Seller(sellerObj(id,name, rating))
App(none)

Question 3
What are the valid paths for this web app? What does each path display?
/ =>shows all items
/seller/ewio => seller ewio
/seller/ewio => seller

Question 4
Where are the links located?

Question 5
How many path templates are there? What is the name of the placeholder in each path template?

########################INSTRUCTIONS 2###########################
http://wakaworkshops.surge.sh/workshop/react-router-marketplace/slides/33
Instructions

Exercises
Question 1

Like the previous workshops, make a summary and then reproduce the project from the summary.
Question 2

There are only 2 items being sold by 2 people. Add 3 additional items and 1 seller. Make sure that every seller is selling at least one item.
Question 3

There might be 10 boats left and as a buyer I'd like to know that information.

Add a details page for each item. In the details page, display how many of that item is left in stock.

HINTS

Add a "number left in stock" field for each item. To do this, we're going to add a new "item details page" where we will display this information.

You will need to add a route for the details page. The path attribute of that route will look something like '/details/:itemId'

You will need to add a function to pass to the render attribute of the route

To extract the itemId in that function, use routerData.match.params.itemId (assuming routerData is the parameter of the function)
Question 4

The potential buyers would like to read reviews before making a purchase. Add reviews for the items.

Add the reviews to the item details page (already created in a previous question)

Question 5

The potential buyers would like to learn more about who wrote each review.

For each review, put a link to the reviewer. By clicking on the link, the user can see all the reviews that person has written.

Question 6

Your users want to see all the items that a seller is selling.

In the seller details page, display links to the items being sold by that seller.

Each item should have a link in the seller details page.

Question 7

Some users would like to see the list of all the sellers.

Add a link on the starting page that displays all the sellers. Create a link for each seller.
When a user clicks on the link, all the items being sold by that seller will be displayed.

Question 8

(super hard question) Add a form to add an item to be sold and another form to add a seller. For the image, let the seller put a url (Hint: you will need to put your data in the state)
Question 9

Use css to make your marketplace pretty
