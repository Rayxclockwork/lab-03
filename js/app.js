'use strict';

var countRight = 0;
var usersName = prompt('What\'s your name?');
console.log('User\'s name is ' + usersName + ' and they\'re AWESOME!');
alert('HEY, ' + usersName + '! You\'re AWESOME!!!');

var eastCoast = prompt('Am I from Seattle? Yes/No');
switch (eastCoast.toLowerCase()) {
case 'yes':
  console.log(usersName + ' typed ' + eastCoast + ' for eastCoast question');
  alert('No, I\'m actuallly from the East Cost!');
  countRight++;
  break;
case 'y':
  console.log(usersName + ' typed ' + eastCoast + ' for eastCoast question');
  alert('No, I\'m actuallly from the East Cost!');
  countRight++;
  break;
case 'no':
  console.log(usersName + ' typed ' + eastCoast + ' for eastCoast question');
  alert('Yep! I\'m actuallly from the East Cost!');
  break;
case 'n':
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
  countRight++;
  break;
case 'y':
  console.log(usersName + ' typed ' + weather + ' for weather question');
  alert('Yes, I love the warmth! Funny that I\'m in Seattle...');
  countRight++;
  break;
case 'no':
  console.log(usersName + ' typed ' + weather + ' for weather question');
  alert('Wrong. I love the sun! Funny that I\'m in Seattle...');
  break;
case 'n':
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
  countRight++;
  break;
case 'y':
  console.log(usersName + ' typed ' + likeCats + ' for likeCats question');
  alert('No, I prefer cats. Meow.');
  countRight++;
  break;
case 'no':
  console.log(usersName + ' typed ' + likeCats + ' for likeCats question');
  alert('Correct! I LOVE cats. Meow.');
  break;
case 'n':
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
  alert('I do like playing. Let me know if you do too and want to play together sometime!');
  countRight++;
  break;
case 'y':
  console.log(usersName + ' typed ' + likeTennis + ' for likeTennis question');
  alert('I do like playing. Let me know if you do too and want to play together sometime!');
  countRight++;
  break;
case 'no':
  console.log(usersName + ' typed ' + likeTennis + ' for likeTennis question');
  alert('Nope. I like playing. Let me know if you do too and want to play together sometime!');
  break;
case 'n':
  console.log(usersName + ' typed ' + likeTennis + ' for likeTennis question');
  alert('Nope. I like playing. Let me know if you do too and want to play together sometime!');
  break;
default:
  console.log(usersName + ' typed something different than Yes or No for likeTennis question');
  alert('Please type Yes or No');
}

var likeRamen = prompt('Do I like ramen? Yes/No');
switch (likeRamen.toLowerCase()) {
case 'yes':
  console.log(usersName + ' typed ' + likeRamen + ' for likeRamen question');
  alert('Yes, I could eat it all day');
  countRight++;
  break;
case 'y':
  console.log(usersName + ' typed ' + likeRamen + ' for likeRamen question');
  alert('Yes, I could eat it all day');
  countRight++;
  break;
case 'no':
  console.log(usersName + ' typed ' + likeRamen + ' for likeRamen question');
  alert('Good try. I love it!');
  break;
case 'n':
  console.log(usersName + ' typed ' + likeRamen + ' for likeRamen question');
  alert('Good try. I love it!');
  break;
default:
  console.log(usersName + ' typed something different than Yes or No for likeRamen question');
  alert('Please type Yes or No');
}

var userInputCousins = parseInt(prompt('How many cousins on my mother\'s side do I have?'));
var correctNumberCousins = 14;
var totalGuessAttemptsCousins = 0;
var maxGuessAttemptCousins = 4;

for(var i = 1; i <= maxGuessAttemptCousins; i++) {
  if(i === 4 && userInputCousins !== correctNumberCousins) {
    console.log(usersName +' ran out of attempts for cousin question');
    alert('Sorry, you ran out of attempts. The correct answer is 14!');
  }
  else if(userInputCousins > correctNumberCousins) {
    console.log(usersName + ' guessed too high for number of cousins');
    userInputCousins = parseInt(prompt('WOAH. Too many cousins. Take another guess'));
    totalGuessAttemptsCousins++;
  }else if(userInputCousins < correctNumberCousins) {
    console.log(usersName + ' guessed too low for number of cousins');
    totalGuessAttemptsCousins++;
    userInputCousins = parseInt(prompt('Aw, too low. Take another guess'));
  }else if(userInputCousins === correctNumberCousins) {
    console.log(usersName + ' guessed the correct number of cousins!');
    alert('Yes! I have 14 cousins.');
    totalGuessAttemptsCousins++;
    countRight++;;
    break;
  }else{
    console.log(usersName + ' typed in something different than a number');
    userInputCousins = parseInt(prompt('Please type in a number.'));
  }
}

console.log('here');
var totalGuessAttemptsSingers = 0;
var likeSingers = [
  'Taylor Swift',
  'Matchbox Twenty',
  'Dua Lipa',
  'Ariana Grande',
  'Ed Sheeran',
  'Julia Michaels',
  'Drake'
];
var maxGuessAttemptSingers = 6;
// length = 7
//index 0-6
var correct = false;
for (var i = 0; i < maxGuessAttemptSingers; i++) {
  var userInputSingers = prompt('Which singers do I like?');
  for (var j = 0; j < likeSingers.length; j++) {
    if (likeSingers[j].toLowerCase() === userInputSingers.toLowerCase()) {
      console.log(usersName + ' typed one of the singers I like');
      alert('Yipee! You\'re correct. My favorites are : ' + likeSingers.toString());
      correct = true;
      totalGuessAttemptsSingers++;
      countRight++;
      break;
    }
  }
  if (correct){
    break;
  }
  totalGuessAttemptsSingers++;
  if(maxGuessAttemptSingers === i + 1) {
    console.log(usersName +' ran out of attempts for cousin question');
    alert('Sorry, you ran out of attempts. My favorites are : ' + likeSingers.toString());
  }
  alert('It\'s not correct. Try again!');
}

console.log(usersName + 'got ' + countRight + ' correct');
alert('You got ' + countRight + ' correct!!');
