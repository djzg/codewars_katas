/*
This time no story, no theory. The examples below show you how to write function accum:

Examples:

accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
*/

function accum(input) {
  // a place to store the result
  let result = '';

  // iterate over the string
  for (let i = 0; i < input.length; i++) {
    // append the current letter i+1 times to the string
    for (let j = 0; j < i + 1; j++) {
    // capitalize the first append
      if (j == 0) {
        result += input[i].toUpperCase();
      } else {
        result += input[i].toLowerCase();
      }
    }
  // append a dash if it isn't the last letter
    if (i != input.length - 1) {
      result += "-";
    }
  }
  return result;
};


console.log(accum("ZpglnRxqenU"), "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu");
console.log(accum("NyffsGeyylB"), "N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb");
console.log(accum("MjtkuBovqrU"), "M-Jj-Ttt-Kkkk-Uuuuu-Bbbbbb-Ooooooo-Vvvvvvvv-Qqqqqqqqq-Rrrrrrrrrr-Uuuuuuuuuuu");
console.log(accum("EvidjUnokmM"), "E-Vv-Iii-Dddd-Jjjjj-Uuuuuu-Nnnnnnn-Oooooooo-Kkkkkkkkk-Mmmmmmmmmm-Mmmmmmmmmmm");
console.log(accum("HbideVbxncC"), "H-Bb-Iii-Dddd-Eeeee-Vvvvvv-Bbbbbbb-Xxxxxxxx-Nnnnnnnnn-Cccccccccc-Ccccccccccc");


// more readable
function accum2(input) {
    // a place to store the result
    let result = '';
    // iterate over the string
    for (let index = 0; index < input.length; index++) {
      const currentLetter = input[index];
      // append the current letter i+1 times to the string
      const totalCount = index + 1;   
      for (let counter = 0; counter < totalCount; counter++) {
      // capitalize the first append
        if (counter == 0) {
          result += currentLetter.toUpperCase();
        } else {
          result += currentLetter.toLowerCase();
        }
      }
    // append a dash if it isn't the last letter
      if (index != input.length - 1) {
        result += "-";
      }
    }
    return result;
};

// reduce function
function accum3(input) {
  // splitting string, and making reduce function
  return input.split('').reduce((result, currentLetter, index) => {
      // append the current letter i+1 times to the string
      const totalCount = index + 1;   
      for (let counter = 0; counter < totalCount; counter++) {
      // capitalize the first append
        if (counter == 0) {
          result += currentLetter.toUpperCase();
        } else {
          result += currentLetter.toLowerCase();
        }
      }
    // append a dash if it isn't the last letter
      if (index != input.length - 1) {
        result += "-";
      }
      return result;
  }, '');
};