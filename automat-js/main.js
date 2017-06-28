// your code, here
let array = ["Chicken Pot Pie","Baked Beans","Macaroni and Cheese","Burgundy Sauce with Beef and Noodles","Creamed Spinach","Pumpkin Pie","Strawberry Shortcake"]
// let main = document.getElementById("main");

// let foodItemDiv = document.createElement('div');
// foodItemDiv.className = 'food-item';
// foodItemDiv.innerHTML = 'Chicken Pot Pie';


// arr = [];

for(let i=0; i<array.length; i++)
{
  let foodItemDiv = document.createElement('div');
  foodItemDiv.className = 'food-item';
  foodItemDiv.innerHTML = array[i];

  foodItemDiv.addEventListener('click', () => {
    foodItemDiv.className += ' hidden';
  });
  let mainDiv = document.getElementById('main');
  mainDiv.appendChild(foodItemDiv);
}

// foodItemDiv.className += ' hidden';
// console.log(arr);
//   // mainDiv.appendChild(foodItemDiv);
