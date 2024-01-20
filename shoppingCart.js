// exporting module
console.log('Exporting module');

const shippingCost = 10;
const cart = [];

// if you want to use code in the main module, need to export
//exports need to be added in top level code!!!
export const addToCart = (product, quantity) => {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
};

const totalPrice = 237;
const totalQuantity = 23;

export { totalPrice, totalQuantity as qt };
