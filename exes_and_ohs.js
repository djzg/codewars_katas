/*
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.
*/

function XO(str) {
  let xCount = 0;
  let oCount = 0;

  for (let i = 0; i < str.length; i++) {
    const letter = str[i];

    if (letter.match(/x/i)) {
      xCount++;
    } else if (letter.match(/o/i)){
      oCount++;
    };
  };
  return xCount == oCount;
}

console.log(XO('xxOo'));

function XO2(str) {
  let xCount = 0;
  let oCount = 0;
  const xRegexp = new RegExp('x', 'i');
  const oRegexp = new RegExp('o', 'i');
  for (let i = 0; i < str.length; i++) {
    const letter = str[i];

    if (letter.match(xRegexp)) {
      xCount++;
    } else if (letter.match(oRegexp)){
      oCount++;
    };
  };
  return xCount == oCount;
}

console.log(XO2('xxOo'));

// reduce function
function XO3(str) {
  if (!str) return true;

  const xRegexp = new RegExp('x', 'i');
  const oRegexp = new RegExp('o', 'i');

  return str.split('').reduce(({ xCount, oCount }, letter, index) => {
    if (letter.match(xRegexp)) {
      xCount++;
    } else if (letter.match(oRegexp)){
      oCount++;
    };
    if (index < str.length - 1) {
      return { xCount, oCount };
    } else {
      return xCount === oCount;
    }
  }, { xCount: 0, oCount: 0 });
}

console.log(XO3('xxOo'));