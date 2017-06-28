class Order {
  // your code, here
  constructor(placedOn,customer,paymentMethod,shippingAddress){
    this.placedOn = placedOn;
    this.customer = customer;
    this.paymentMethod = paymentMethod;
    this.shippingAddress = shippingAddress;
    this.items = []
  }
  addItem(items){
    this.items.push(items);
    return this.items
  }
  total(){
    let sum = 0;
    for(let prices in this.items)
    {
        sum += this.items[prices].price
    }
    return sum
  }
  summary()
  {
    let names = '';
    for (let i in this.items)
    {
      names+= 'Name: '+this.items[i].name
    }
    return "Date: "+this.placedOn+'\nCustomer: ' + this.customer + '\nPayment method:' + this.paymentMethod + '\nShipping address: ' + this.shippingAddress + '\n\nItems:\n\n' + names + '\nTotal: '+this.total();

  }
}
