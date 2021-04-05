/*
Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

Notes:

    Only lower case letters will be used (a-z). No punctuation or digits will be included.
    Performance needs to be considered
*/

function scramble(str1, str2) {
  // a place to store str1 letter counts
  const letterCounts = {};

  // iterate over str1
  for (let i = 0; i < str1.length; i++) {
    const currentLetter = str1[i];
    // set a property on the object that is the current letter
      // if the property didn't exist, set it to 1
      // otherwise increment the value        
    letterCounts[currentLetter] = letterCounts[currentLetter] || 0;
    letterCounts[currentLetter]++;

  }

  // iterate over str2
  for (let i = 0; i < str2.length; i++) {
    const currentLetter = str2[i];
    // if the current letter is in the object and the count is greater than 0 
    if (letterCounts[currentLetter] > 0) {
      // decrement the count
      letterCounts[currentLetter]--;
    // else break out of the loop
      // return false
    } else {
      return false;
    }
    return true;
  }
}


// Using reduce function

function scramble2(str1, str2) {
  const letterCounts = str1.split('').reduce((letterCounts, currentLetter) => {
    letterCounts[currentLetter] = letterCounts[currentLetter] || 0;
    letterCounts[currentLetter]++;
    return letterCounts;
  }, {});

  // iterate over str2
  for (let i = 0; i < str2.length; i++) {
    const currentLetter = str2[i];
    // if the current letter is in the object and the count is greater than 0 
    if (letterCounts[currentLetter] > 0) {
      // decrement the count
      letterCounts[currentLetter]--;
    // else break out of the loop
      // return false
    } else {
      return false;
    }
    return true;
  }
}

// Using function every()

function scramble3(str1, str2) {
  const letterCounts = str1.split('').reduce((letterCounts, currentLetter) => {
    letterCounts[currentLetter] = letterCounts[currentLetter] || 0;
    letterCounts[currentLetter]++;
    return letterCounts;
  }, {});

  return str2.split('').every((currentLetter) => {
    if (letterCounts[currentLetter] > 0) {
      // decrement the count
      letterCounts[currentLetter]--;
    // else break out of the loop
      // return false
    } else {
      return false;
    }
  });
}


// Using  Array.prototype call

function scramble3(str1, str2) {
  const letterCounts = Array.prototype.reduce.call(str1, (letterCounts, currentLetter) => {
    letterCounts[currentLetter] = letterCounts[currentLetter] || 0;
    letterCounts[currentLetter]++;
    return letterCounts;
  }, {});

  return Array.prototype.every.call(str2, (currentLetter) => {
    if (letterCounts[currentLetter] > 0) {
      // decrement the count
      letterCounts[currentLetter]--;
    // else break out of the loop
      // return false
    } else {
      return false;
    }
  });
}