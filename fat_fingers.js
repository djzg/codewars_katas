/*
Freddy has a really fat left pinky finger, and every time Freddy tries to type an A, he accidentally hits the CapsLock key!

Given a string that Freddy wants to type, emulate the keyboard misses where each A supposedly pressed is replaced with CapsLock, and return the string that Freddy actually types. It doesn't matter if the A in the string is capitalized or not. When CapsLock is enabled, capitalization is reversed, but punctuation is not affected.
*/

var fatFingers = function (str) {
  // a place to store the fat-fingered string
  let fatFingered = '';
  // a place to store whether or not the current letter should be capitalized, initialized to false
  let capitalize = false;
  // iterate over the string
  for (let i = 0; i < str.length; i++) {
    // if the current letter is an 'a', set capitalize to true
    const letter = str[i];
    if (letter == 'a') {
      capitalize = !capitalize;
    // else, if the current letter is an 'A', set capitalize to false
    } else if (letter == 'A') {
      capitalize = !capitalize;
    // else, append the current letter 
    } else {
      // append capitalized based on our boolean
      if (capitalize) {
        fatFingered += letter.toUpperCase();
      } else {
        fatFingered += letter;
      }
    }
  }
  // return the fat fingered string
  return fatFingered;
}

console.log(fatFingers("The quick brown fox jumps over the lazy dog.") == "The quick brown fox jumps over the lZY DOG.");
console.log(fatFingers("aAaaaaAaaaAAaAa") == "");
console.log(fatFingers("The end of the institution, maintenance, and administration of government, is to secure the existence of the body politic, to protect it, and to furnish the individuals who compose it with the power of enjoying in safety and tranquillity their natural rights, and the blessings of life: and whenever these great objects are not obtained, the people have a right to alter the government, and to take measures necessary for their safety, prosperity and happiness.") == "The end of the institution, mINTENnce, ND dministrTION OF GOVERNMENT, IS TO SECURE THE EXISTENCE OF THE BODY POLITIC, TO PROTECT IT, nd to furnish the individuLS WHO COMPOSE IT WITH THE POWER OF ENJOYING IN Sfety ND TRnquillity their nTURl rights, ND THE BLESSINGS OF LIFE: nd whenever these greT OBJECTS re not obtINED, THE PEOPLE Hve  RIGHT TO lter the government, ND TO Tke meSURES NECESSry for their sFETY, PROSPERITY nd hPPINESS.");


var fatFingers2 = function (str) {
  // a place to store the fat-fingered string
  let fatFingered = '';
  // a place to store whether or not the current letter should be capitalized, initialized to false
  let capsLock = false;
  // iterate over the string
  for (let i = 0; i < str.length; i++) {
    // if the current letter is an 'a' or 'A', set capitalize to true
    const letter = str[i];
    if (letter == 'a' || letter == 'A') {
      capsLock = !capsLock;
    } else {
      // append capitalized based on our boolean
      if (capsLock) {
        fatFingered += letter.toUpperCase();
      } else {
        fatFingered += letter;
      }
    }
  }
  // return the fat fingered string
  return fatFingered;
}

// reduce function
var fatFingers3 = function (str) {
  if (str === null) return null;
  if (!str) return null;
  // a place to store whether or not the current letter should be capitalized, initialized to false
  return str.split('').reduce(({fatFingered, capsLock}, letter, index) => {
    if (letter == 'a' || letter == 'A') {
      capsLock = !capsLock;
    } else {
      // append capitalized based on our boolean
      if (capsLock) {
        fatFingered += letter.toUpperCase();
      } else {
        fatFingered += letter;
      }
    }
    if (index < str.length - 1) {
      return {fatFingered, capsLock};
    } else {
      return fatFingered;
    }
  }, { fatFingered: '', capsLock: false});
}

// correct answer
var fatFingers = function(str) {
  if (!str) return str;

  var capsLock = false;
  var result = str.split('').reduce((acc, char) => {
    if (char.toUpperCase() === 'A') {
      capsLock = !capsLock;
      return acc;
    }

    if (capsLock) {
      char = char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase();
    }
    acc += char;
    return acc;
  }, '');
  return result;
}