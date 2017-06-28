// your GroceryItem code, here
class GroceryItem
{
  constructor(name,quantity)
  {
    this.name = name;
    if (quantity) {
      this.quantity = quantity;
    } else {
      this.quantity = 1;
    }
  }
  toListElement()
  {
    var elem = document.getElementById('main');
    elem.innerHTML += `<li>(${this.quantity}) ${this.name}</li>`;
  }
}
