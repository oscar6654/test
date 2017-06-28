// your code, here
let mainDiv = document.getElementById('main');

let perimeter = (x,y) => {
  return 2*x + 2*y;
}
mainDiv.innerHTML = perimeter(3,5);
