class Square {
  constructor(length,x,y)
  {
    this.length = length;
    if(x)
    {
      this.x = x;
    }
    else{
      this.x = 0;
    }
    if(y){
      this.y = y;
    }
    else{
      this.y = 0;
    }
  }
  area(){
    return (this.length)*(this.length)
  }
  perimeter(){
    return (this.length)*4
  }
  contains_point(a,b){
    let delta = this.length / 2.0
    if (a < this.x - delta)
    {
      return false
    }
    else if( a > this.x + delta)
    {
      return false
    }
    else if(b > this.y + delta)
    {
      return false
    }
    else if(b < this.y - delta)
    {
      return false
    }
    else{
      return true
    }

  }
}
