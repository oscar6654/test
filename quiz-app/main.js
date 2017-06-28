// your code, here
let message = "At what temperature on the Celsius scale does water freeze?";
let answer = prompt(message);
let mainDiv = document.getElementById('result');
if (answer == 0)
{
  mainDiv.innerHTML = "CORRECT GOOD JOB!";
}
else
{
  mainDiv.innerHTML = "Sorry. That's not the correct answer.";
}
