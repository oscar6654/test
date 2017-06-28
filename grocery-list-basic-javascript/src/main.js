let item = new GroceryItem('Soda',2);
let item1 = new GroceryItem('Chicken');
let item2 = new GroceryItem('Beef',3);

let groceryList = [item,item1,item2];

for(let i in groceryList)
{
  console.log(groceryList[i]);
  groceryList[i].toListElement();
}
