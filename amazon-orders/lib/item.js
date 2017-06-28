class Item {
  // your code, here
  constructor(name,manufacturer,price,description){
    this.name = name;
    if(description){
      this.description = description;
    }
    this.manufacturer = manufacturer;
    this.price = price;
  }
  summary(){
    return "Name: "+this.name + '\nDescription: '+this.description + '\nManufacturer: '+this.manufacturer + '\nPrice: ' + this.price
    // return `Name: #{this.name}\nDescription: #{this.description}\nManufacturer: #{this.manufacturer}\nPrice: $#{this.price}`
  }
}
item = new Item('Magnifying Glass', 'Spys-R-Us', 5.75, 'Great for inspecting clues.');
console.log(item.name);
