/*

Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples:
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !

*/

function pigIt(str){
  // split string on space
    // map the words 
      // return word with the first letter at the end and add 'ay'
    // join on space
  
    return str.split(' ').map(word => word.slice(1) + word[0] + 'ay').join(' ');
}

// Another variation

function pigIt3(str) {
  return str.split(' ').map(function (letter) {
    return letter.slice(1) + letter.slice(0, 1) + 'ay';
  }).join(' ');
}

// With a for loop

function pigIt2(str) {
  // a place to store the pig latin string
  let pigLatin = '';
    // store the first letter  
  let firstLetter = str[0];
  // iterate over the string
  for (let i = 1; i < str.length; i++) {
    const currentLetter = str[i];
    if (!firstLetter) {
      firstLetter = currentLetter;
    } else {
      if (currentLetter != ' ') {
        // append each next letter until we see a space
        pigLatin += currentLetter;
        // append the current first letter and 'ay'
      } else {
        pigLatin += firstLetter + 'ay ';
        firstLetter = '';
      }      
    }
  }
  pigLatin += firstLetter + 'ay';
  return pigLatin;
}

// With regex

function pigIt4(str) {
  return str.replace(/(\w)(\w*)(\s|$)/g, '\$2\$1ay\$3')
}


