/*
Generate a random integer number between 0 and 15
If the result is divisible by 3 - alert 'fizz'
If the result is divisible by 5 - alert 'buzz'
If the result is divisible by 3 AND by 5 - alert 'fizzbuzz'
If the result is 0 it should not return fizz, buzz or fizzbuzz
*/
var number = Math.round(Math.random() * 15);
label:
if (number === 0) {
  alert('number = 0');
  break label;
} else if (number % 3 === 0) {
  if (number % 5 === 0) {
    alert('fizzbuzz');
    break label;
  }
  alert('fizz');
} else if (number % 5 === 0) {
  if (number % 3 === 0) {
    alert('fizzbuzz');
    break label;
  }
  alert('buzz');
}
