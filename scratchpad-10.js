/*
Generate a random integer number between 0 and 5
If the result is divisible by 3 - alert 'fizz'
If the result is divisible by 5 - alert 'buzz'
Otherwise print the number to the console
*/
while (true) {
  var number = Math.round(Math.random() * 5);
  if (number % 3 === 0) {
    alert('fizz');
    break;
  } else if (number % 5 === 0) {
    alert('buzz');
    break;
  } else {
    console.log(number);
  }
}
console.log(number);
