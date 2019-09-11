'use strict';

var usersName = prompt('What\'s your name?');
console.log('User\'s name is ' + usersName + ' and they\'re AWESOME!');
alert('HEY, ' + usersName + '! You\'re AWESOME!!!');

var eastCoast = prompt('Am I from Seattle? Yes/No');
switch (eastCoast.toLowerCase()) {
case 'yes':
  console.log(usersName + ' typed ' + eastCoast + ' for eastCoast question');
  alert('No, I\'m actuallly from the East Cost!');
  break;
case 'no':
  console.log(usersName + ' typed ' + eastCoast + ' for eastCoast question');
  alert('Yep! I\'m actuallly from the East Cost!');
  break;
default:
  console.log(usersName + ' typed something different than Yes or No for eastCoast question');
  alert('Please type Yes or No');
}

var weather = prompt('Do I like warm weather? Yes/No');
switch (weather.toLowerCase()) {
case 'yes':
  console.log(usersName + ' typed ' + weather + ' for weather question');
  alert('Yes, I love the warmth! Funny that I\'m in Seattle...');
  break;
case 'no':
  console.log(usersName + ' typed ' + weather + ' for weather question');
  alert('Wrong. I love the sun! Funny that I\'m in Seattle...');
  break;
default:
  console.log(usersName + ' typed something different than Yes or No for weather question');
  alert('Please type Yes or No');
}

var likeCats = prompt('Do I like dogs more than cats? Yes/No');
switch (likeCats.toLowerCase()) {
case 'yes':
  console.log(usersName + ' typed ' + likeCats + ' for likeCats question');
  alert('No, I prefer cats. Meow.');
  break;
case 'no':
  console.log(usersName + ' typed ' + likeCats + ' for likeCats question');
  alert('Correct! I LOVE cats. Meow.');
  break;
default:
  console.log(usersName + ' typed something different than Yes or No for likeCats question');
  alert('Please type Yes or No');
}

var likeTennis = prompt('Do I like playing tennis? Yes/No');
switch (likeTennis.toLowerCase()) {
case 'yes':
  console.log(usersName + ' typed ' + likeTennis + ' for likeTennis question');
  alert(
    'I do like playing. Let me know if you do too and want to play together sometime!'
  );
  break;
case 'no':
  console.log(usersName + ' typed ' + likeTennis + ' for likeTennis question');
  alert(
    'Nope. I like playing. Let me know if you do too and want to play together sometime!'
  );
  break;
default:
  console, log(usersName + ' typed something different than Yes or No for likeTennis question');
  alert('Please type Yes or No');
}

var likeRamen = prompt('Do I like ramen? Yes/No');
switch (likeRamen.toLowerCase()) {
case 'yes':
  console.log(usersName + ' typed ' + likeRamen + ' for likeRamen question');
  alert('Yes, I could eat it all day');
  break;
case 'no':
  console.log(usersName + ' typed ' + likeRamen + ' for likeRamen question');
  alert('Good try. I love it!');
  break;
default:
  console.log(usersName + ' typed something different than Yes or No for likeRamen question');
  alert('Please type Yes or No');
}
