let initialItems = [
  {
    description: 'Nice boats.50% off. wow',
    price: 10000,
    number_left_in_stock: 0,
    image: '/boat.png',
    id: 'asewq',
    sellerId: 'ewio',
  },

  {
    id: 'wqwasq',
    description: 'Lawn chairs',
    price: 50,
    number_left_in_stock: 1,
    image: '/lawnchair.jpg',
    sellerId: 'xcvb',
  },

  {
    id: '123',
    description: 'Crazy cat, scape all nights.',
    price: '1million',
    number_left_in_stock: 2,
    image: '/cat.jpg',
    sellerId: 'abc',
  },
  {
    id: '456',
    description: 'Dobermann, bites even the owner',
    price: '1million',
    number_left_in_stock: 3,
    image: '/dog.jpg',
    sellerId: 'abc',
  },
  {
    id: '789',
    description: 'Snowshoes',
    price: '100',
    number_left_in_stock: 4,
    image: '/snowshoes.jpg',
    sellerId: 'abc',
  },
];

let initialSellers = [
  {
    id: 'ewio',
    name: 'Jack Frost',
    rating: '5 stars',
  },

  {
    id: 'xcvb',
    name: 'Hank Green',
    rating: '2 stars',
  },

  {
    id: 'abc',
    name: 'Vendor -::- Hopper the cat',
    rating: '10 stars',
  },
];

let itemsReviews = [
  {
    idItem: 'asewq',
    idReviewer: 'p123',
    review: 'Horrible boat',
  },
  {
    idItem: 'asewq',
    idReviewer: 'p456',
    review: 'Nice boat',
  },

  {
    idItem: 'wqwasq',
    idReviewer: 'p123',
    review: 'Horrible chairs',
  },
  {
    idItem: 'wqwasq',
    idReviewer: 'p456',
    review: 'Nice chairs',
  },
  {
    idItem: '123',
    idReviewer: 'p456',
    review: 'Gorgeous cats',
  },

  {
    idItem: '456',
    idReviewer: 'p456',
    review: 'Adorable dogs',
  },

  {
    idItem: '789',
    idReviewer: 'p456',
    review: 'Uncomfortable snowshoes',
  },
];

let reviewers = [
  {
    id: 'p123',
    name: 'Buyer 123',
  },

  {
    id: 'p456',
    name: 'Buyer 456',
  },
];

export { initialItems, initialSellers, itemsReviews, reviewers };
