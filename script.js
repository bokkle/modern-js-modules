// importing module
// dont need strict because all modules are automatically strict mode
// import { addToCart, totalPrice as price, qt } from './shoppingCart.js';

console.log('importing module');
/*
// addToCart('bread', 5);
// console.log(price, qt);

// import * as ShoppingCart from './shoppingCart.js';
// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart.totalPrice);

// cant mixed name and default exports, but dont do it!
// import add, { addToCart, totalPrice as price, qt } from './shoppingCart.js';
// add('pizza', 2);

import add, { cart, totalPrice } from './shoppingCart.js';
add('pizza', 2);
add('bread', 5);
add('apples', 4);

//IMPORTS ARE NOT COPIES OF THE EXPORT, INSTEAD, THEY ARE A LIVE CONNECTION
// aka they point to the same place in memory
console.log(cart);

import { tax } from './shoppingCart.js';
console.log(tax);
console.log(totalPrice * tax);
/*
// ES2022 AWAIT/MODULES
// can use await outside of an async function, ONLY WORKS IN MODULES
console.log('Start fetching');
//this blocks execution of entire module
const res = await fetch('https://jsonplaceholder.typicode.com/posts');
const data = await res.json();
console.log(data);
//below will not execute until above does bc blocked by await
console.log('Something');
*/
/*
const getLastPost = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  console.log(data);

  return { title: data.at(-1).title, text: data.at(-1).body };
};
const lastPost = getLastPost();
console.log(lastPost); // returns a promise bc calling an async func ALWAYS RTNS PROMISE

//this is a workaround (using then on the promise), but it's messy
lastPost.then((last) => console.log(last));

//instead, use top level await
const lastPost2 = await getLastPost();
console.log(lastPost2);
*/
/*
// ify
const ShoppingCart2 = (() => {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCart = (product, quantity) => {
    cart.push({ product, quantity });
    console.log(
      `${quantity} ${product} added to cart (shipping cost is ${shippingCost})`
    );
  };

  const orderStock = (product, quantity) => {
    console.log(`${quantity} ${product} ordered from supplier`);
  };

  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();

ShoppingCart2.addToCart('apple', 4);
ShoppingCart2.addToCart('pizza', 2);
console.log(ShoppingCart2);
console.log(ShoppingCart2.shippingCost); // undefined, not accessible bc module
*/

// NPM
import cloneDeep from './node_modules/lodash-es/cloneDeep.js';

const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 5 },
  ],
  user: { loggedIn: true },
};
const stateClone = Object.assign({}, state);
// instead of object.assign, can use lodash
const stateDeepClone = cloneDeep(state);
//below changes the original object AND clone
state.user.loggedIn = false;
console.log(stateClone);

console.log(stateDeepClone);
