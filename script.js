// importing module
// dont need strict because all modules are automatically strict mode
// import { addToCart, totalPrice as price, qt } from './shoppingCart.js';

console.log('importing module');

// addToCart('bread', 5);
// console.log(price, qt);

import * as ShoppingCart from './shoppingCart.js';
ShoppingCart.addToCart('bread', 5);
console.log(ShoppingCart.totalPrice);
