// your code, here
let array = [
'It is certain',
'It is decidedly so',
'Without a doubt',
'Yes, definitely',
'You may rely on it',
'As I see it, yes',
'Most likely',
'Outlook good',
'Yes',
'Signs point to yes',
'Reply hazy try again',
'Ask again later',
'Better not tell you now',
'Cannot predict now',
'Concentrate and ask again',
'Dont count on it',
'My reply is no',
'My sources say no',
'Outlook not so good',
'Very doubtful'];

let randomIndex = (length) => {
  return Math.floor((Math.random() * length));
}
let sample = array[randomIndex(array.length)]
let mainDiv = document.getElementById('main');
mainDiv.innerHTML = sample
console.log(sample);
