class Circle {
  constructor(radius,x,y){
    this.radius = radius;
    if(x)
    {
      this.x = x;
    }
    else {
      this.x = 0;
    }
    if(y)
    {
      this.y = y;
    }
    else{
      this.y =0;
    }
  }
  diameter(){
    return this.radius*2
  }
  area(){
    let area = (this.radius*this.radius)*3.14;

    return Math.floor(area)
  }
  perimeter(){
    let perimeter = (this.radius)*2*3.14;
    return Math.floor(perimeter)
  }
}
