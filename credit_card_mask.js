/*
Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

Your task is to write a function maskify, which changes all but the last four characters into '#'.

maskify("4556364607935616") == "############5616"
maskify(     "64607935616") ==      "#######5616"
maskify(               "1") ==                "1"
maskify(                "") ==                 ""
*/

function maskify(cc) {
  // place to store the masked number
  let masked = '';
  // iterate over the string in reverse
  for (let i = cc.length - 1; i >= 0; i--) {
      const letter = cc[i];
      // if the current index is greater than length - 5
      if (i > cc.length - 5) {
        // append the letter to the masked number
        masked = letter + masked;
      } else {
        // else append a # mask    
        masked = '#' + masked;
      }
  } 
  // return the masked number
  return masked;
}


// Using map 
function maskify2(cc) {
  return cc.split('').map((letter, index, array) => {
    if (index < array.length - 4) {
      return '#'
    } else {
      return letter;
    }
  }).join('');

}

// Using for loop in normal direction
function maskify3(cc) {
  let masked = '';
  for (let i = 0; i < cc.length; i++) {
      const letter = cc[i];
      if (i < cc.length - 4) {
        masked += '#';
      } else {
        masked += letter;;
      }
  } 
  return masked;
}

// Using regex and slice

function maskify4(cc) {
  return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
}