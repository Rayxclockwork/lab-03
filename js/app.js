'use strict';

var usersName = prompt('What\'s your name?');
console.log('User\'s name is ' + usersName +' and they\'re AWESOME!');
alert('HEY, ' + usersName + '! You\'re AWESOME!!!');

var likeCats = prompt('Do you like cats? Yes/No');
switch(likeCats.toLowerCase()){
case 'yes':
  console.log(usersName + ' typed Yes');
  alert('You like cats! Did we just become best friends?');
  break;
case 'no':
  console.log(usersName + ' typed No');
  alert('You don\'t like cats and that makes me sad...');
  break;
default:
  console.log(usersName + ' typed something different than Yes or No');
  alert('Please type Yes or No');  
}
