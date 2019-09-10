'use strict';

var usersName = prompt('What\'s your name?');
console.log('User\'s name is ' + usersName +' and they\'re AWESOME!');
alert('HEY, ' + usersName + '! You\'re AWESOME!!!');

var alien = prompt('Are you an alien? Yes/No');
switch(alien.toLowerCase()){
case 'yes':
  console.log(usersName + ' is an alien.');
  alert('Greetings, Alien');
  break;
case 'no':
  console.log(usersName + ' is a human.');
  alert('Greetings, Earthling');
  break;
default:
  console.log(usersName + ' typed something different than Yes or No.');
  alert('Please type Yes or No');
}

var likeCats = prompt('Do you like cats? Yes/No');
switch(likeCats.toLowerCase()){
case 'yes':
  console.log(usersName + ' likes cats.');
  alert('You like cats! Did we just become best friends?');
  break;
case 'no':
  console.log(usersName + ' doesn\'t like cats.');
  alert('You don\'t like cats and that makes me sad...');
  break;
default:
  console.log(usersName + ' typed something different than Yes or No.');
  alert('Please type Yes or No');  
}

var likeTennis = prompt('Do you like playing tennis?');
switch(likeTennis.toLowerCase()){
case 'yes':
  console.log(usersName + 'likes playing tennis.');
  alert('Let\'s play together sometime!');
  break;
case 'no':
  console.log(usersName + 'doesn\'t like playing tennis.');
  alert('Aw, darn');
  break;
default:
  console,log(usersName + ' typed something different than Yes or No.');
  alert('Please type Yes or No');
}

var eastCoast = prompt('Are you from the East coast?');
switch(eastCoast.toLowerCase()){
case 'yes':
  console.log(usersName + ' is from the East coast.');
  alert('I am from the East coast too!');   
  break;
case 'no':  
  console.log(usersName + 'isn\'t from the East coast.');
  alert('Cool that you\'re from somewhere else!');
  break;
default:
  console.log(usersName + ' typed something different than Yes or No.');
  alert('Please type Yes or No');
