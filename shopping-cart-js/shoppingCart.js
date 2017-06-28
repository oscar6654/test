// your code, here
let cart =
{
  itemName: 'Coke',
  quantity: 25
}

let cart2 =
{
  itemName: 'Juice',
  quantity: 10
}

let cart3 =
{
  itemName: 'Water',
  quantity: 2
}

shoppingCart = [];
shoppingCart.push(cart);
shoppingCart.push(cart2);
shoppingCart.push(cart3);
shoppingCart.forEach((item) => {
  console.log(item.itemName + ": " + item.quantity);
})
