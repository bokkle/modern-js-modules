// exporting module
console.log('Exporting module');

//blocking code
// console.log('Start fetching users');
// await fetch('https://jsonplaceholder.typicode.com/users');
// console.log('Finish fetching users');

const shippingCost = 10;
export const cart = [];

// if you want to use code in the main module, need to export
//exports need to be added in top level code!!!
export const addToCart = (product, quantity) => {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
};

const totalPrice = 237;
const totalQuantity = 23;

export { totalPrice, totalQuantity as qt };

// default exports (used when we want to export 1 thing per module)
export default (product, quantity) => {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
};

export const tax = 1.13;
