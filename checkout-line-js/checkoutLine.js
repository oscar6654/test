let eggs = {
  itemName: 'dozen eggs',
  quantity: 2,
  price: 0.99
}

let milk = {
  itemName: 'gallon of milk',
  quantity: 1,
  price: 2.99
}

let bread = {
  itemName: 'loaf of bread',
  quantity: 1,
  price: 3.50
}

let coffee = {
  itemName: 'lbs. of coffee',
  quantity: 10,
  price: 8.99
}

let shoppingCart = [eggs, milk, bread, coffee]

// your code, here
console.log(shoppingCart[1].quantity);
console.log(shoppingCart[3].price);

let sub = 0;
shoppingCart.forEach((item) => {
  sub+= item.price;
})
console.log('Sub-Total: ' + sub);

let tax = 6.25/100;
let total = (sub,tax) => {
  let sales_tax = tax * sub;
  return (sub + sales_tax)
};
console.log('Total Price is ' + total(sub,tax));
