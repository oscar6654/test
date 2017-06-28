// your code, here
let length = 20
let width = 8
let height = 8
let in_to_feet = 12
let height_in_feet = height/in_to_feet
let cubic_feet = length * width * height_in_feet
let answer = "Cubic Feet: " + cubic_feet + '\n'
let ans = document.getElementById("main");
if (cubic_feet <= 49)
  ans.innerHTML = answer + "Quote Price: $20";
  // console.log(answer + "Quote Price: $20");
else if (cubic_feet <= 149)
  ans.innerHTML = answer + "Quote Price: $20";
  // console.log(answer + "Quote Price: $50");
else if (cubic_feet <= 299)
  console.log(answer + "Quote Price: $100");
else
  console.log(answer + "Quote Price: $150");
