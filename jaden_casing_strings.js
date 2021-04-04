/*
Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.
*/

String.prototype.toJadenCase = function () {
  // a place to store the jadenCaseStr
  let jadenCase = '';
  // a place to store whether the next letter we encounter should be capitalized
  let capitalize = true;
  // iterate over each letter in the string
  for (let i = 0; i < this.length; i++) {
   // always capitalize the first letter of the string
    const letter = this[i];
    // if the current letter is a space, next letter should be capitalized
    if (letter === ' ') {
      capitalize = true;
      jadenCase += ' ';
    } else {
      // else append either the letter itself, or capitalize the letter
      if (capitalize) {
        jadenCase += letter.toUpperCase();
        capitalize = false;
      } else {
        jadenCase += letter.toLowerCase();
      }
    }
  }

  return jadenCase;
}

var str = "How can mirrors be real if our eyes aren't real";

var jadenStr = str.toJadenCase();
console.log(jadenStr);



// map function
String.prototype.toJadenCase2 = function () {
  // split the string on spaces
  return this.split(' ').map(word => {
    // capitalize first letter of each word
    return word[0].toUpperCase() + word.slice(1);
    // join them all back together
  }).join(' ');
  
}

var jadenStr2 = str.toJadenCase2();
console.log(jadenStr2);

