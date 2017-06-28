// your code, here
//THIS IS THE EXCEDING EXPECTATION REQUIRMENT. MAX OF 5 WORDS AT 15-SEC TIMEOUT
let todo_list = document.getElementById('todo-list');
todo_array = [];
let message = 'Add To-Do list!';
let interval = setInterval(() => {
  let answer = prompt(message);
  if (answer !== null)
  {
      todo_array.push(answer);
  }
  ul(todo_array);
},3000);
setTimeout(() => {
  clearInterval(interval);
},15000);


let ul = (func) => {
  let words = '';
  for(let i = 0; i < func.length; i++)
  {
    words += `<ul>${func[i]}</ul>`;
  }
  console.log(words);
  todo_list.innerHTML = words;
};
