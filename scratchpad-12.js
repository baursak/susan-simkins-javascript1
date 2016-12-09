/*
Let's create a text adventure game with JavaScript.  Let's set a scenario in which 
we encounter a zombie, choose a weapon to fight the zombie with, and have a 50/50 
chance of either defeating the zombie with our weapon, or getting bitten and losing 
the game.
*/
alert('It is the zombie apocalypse. You are looting a store and suddenly a zombie bursts through the door');
var weapon = prompt('You search around frantically for a weapon.  What do you choose?  A bow and arrow, an axe, or a rubber chicken?');
var randomNumber = Math.round(Math.random());
alert('You attack the zombie with your ' + weapon);
if (randomNumber === 0) {
  alert('The zombie bites you. You lose');
} else {
  alert('You kille the zombie with your ' + weapon + '. You win');
}
