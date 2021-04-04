/*

Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.
*/

function getCount(str) {
  let vowelsCount = 0;

  // iterate over the string
  for (let i = 0; i < str.length; i++) {
    const currentLetter = str[i];
    // if the current letter is a, e, i, o, u
    if (currentLetter == 'a' || currentLetter == 'e' || currentLetter == 'i' || currentLetter == 'o' || currentLetter == 'u') {
      // increase the vowelsCount
      vowelsCount++;
    }
  }
  return vowelsCount;
}


console.log(getCount("abracadabra"), 5);

// Using objects

function getCount2(str) {
  let vowelsCount = 0;
  // using object
  const vowels = {
    a: true,
    e: true,
    i: true,
    o: true,
    u: true
  };
  for (let i = 0; i < str.length; i++) {
    const currentLetter = str[i];
    // if the current letter is a, e, i, o, u
    if (vowels[currentLetter]) {
      // increase the vowelsCount
      vowelsCount++;
    }
  }
  return vowelsCount;
}

// Using reduce function

function getCount3(str) {
  const vowels = {
    a: true,
    e: true,
    i: true,
    o: true,
    u: true
  };

  return str.split('').reduce((vowelsCount, currentLetter) => {
    if (vowels[currentLetter]) {
      // increase the vowelsCount
      vowelsCount++;
    }
    return vowelsCount;
  }, 0);
}

// Using filter function
function getCount4(str) {
  const vowels = {
    a: true,
    e: true,
    i: true,
    o: true,
    u: true
  };

  return str.split('').filter((currentLetter) => {
    if (vowels[currentLetter]) {
      // increase the vowelsCount
      return true;
    }
  }).length;
}

// Using filter function #2
function getCount4(str) {
  const vowels = {
    a: true,
    e: true,
    i: true,
    o: true,
    u: true
  };

  return str.split('').filter((currentLetter) => vowels[currentLetter]).length;
}
